#include "pxt.h"
#include "MuVisionSensor3/MuVisionSensor.h"
#include "MuVisionSensor3/MuVisionSensor3_AT.h"

MuVisionSensor* MU[4]={nullptr};

enum MuId {
    //% block="MU00"
    Mu00=0,
    //% block="MU01"
    Mu01,
    //% block="MU10"
    Mu10,
    //% block="MU11"
    Mu11
};

enum MuStatus {
    //% block="启用"
    Enable=1,
    //% block="关闭"
    Disable=0
};

enum MuLsType {
    //% block="接近检测"
    LsProximity=       1,
    //% block="环境光检测"
    LsAmbientLight=    2,
    //% block="手势检测"
    LsGesture=         8,
};

enum MuAtMode {
    //%block="客户端"
    ModeSTA,
    //%block="热点"
    ModeAP,
};

//% weight=103 color="#ff6600" icon="\uf110"
//% block=酷哥视觉
namespace muvision {

    /**
     * 初始化视觉传感器
     */
    //% blockId=mu3_begin block="初始化|%id|端口%port"
    //% group="设置" 
    void begin(MuId id, MuVsMode port) {
        if (!MU[id]) {
            MU[id] = new MuVisionSensor(0x60+id);
        }
        if (port == kSerialMode) {
            MU[id]->begin(&uBit.serial);
        } else if (port == kI2CMode) {
            MU[id]->begin(&uBit.i2c);
        }
    }

    /**
     * 恢复默认设置
     */
    //% blockId=mu3_set_default block="%id|恢复默认设置"
    //% group="设置"
    void setDefault(MuId id){
        while(MU[id]->SensorSetDefault()!=MU_OK);
    }

    /**
     * 开始视觉算法
     */
    //% blockId=mu3_vision_begin block="%id|%enable|算法%type"
    //% group="设置"
    void visionBegin(MuId id, MuStatus status, MuVsMessageVisionType type){
        MuVisionSensor *mu = MU[id];
        if (status) {
            while(mu->VisionBegin((MuVisionType)visionTypeEnumToMacro(type))!=MU_OK);
        } else {
            mu->VisionEnd((MuVisionType)visionTypeEnumToMacro(type));
        }
    }

    /**
     * 设置LED颜色
     * @param id MU id
     * @param led LED类型
     * @param detected_color 识别到目标物体时LED颜色
     * @param undetected_color 未识别到目标物体时LED颜色.
     */
    //% blockId=mu3_led_set_color block="%id|LED %led|检测到物体时显示%detected_color|否则%undetected_color"
    //% weight=200 inlineInputMode=inline
    //% group="设置" advanced=true
    void ledSetColor(MuId id, MuVsLed led, MuVsLedColor detected_color, MuVsLedColor undetected_color) {
        if (detected_color == undetected_color) {
            while(MU[id]->LedSetMode(led, 1, 1) != MU_OK);
        } else {
            while(MU[id]->LedSetMode(led, 0, 0) != MU_OK);
        }
        while(MU[id]->LedSetColor(led, detected_color, undetected_color, 1) != MU_OK);
    }
    /**
     * 设置算法等级
     * @param id MU id
     * @param type 算法类型
     * @param level 算法等级
     */
    //% blockId=mu3_vision_set_level block="%id|算法%VISION_TYPE|性能%level"
    //% group="设置" advanced=true
    void visionSetLevel(MuId id, MuVsMessageVisionType type, MuVsVisionLevel level){
        while(MU[id]->VisionSetLevel((MuVisionType)visionTypeEnumToMacro(type), level) != MU_OK);
    }
    /**
     * 摄像头设置数码变焦
     * @param id MU id
     * @param zoom 数码变焦值
     */
    //% blockId=mu3_camera_set_zoom block="%id|数码变焦%level"
    //% group="设置" advanced=true
    void cameraSetZoom(MuId id, MuVsCameraZoom zoom) {
        while(MU[id]->CameraSetZoom(zoom) != MU_OK);
    }

    /**
     * 摄像头设置白平衡
     * @param id MU id
     * @param wb 白平衡模式
     */
    //% blockId=mu3_camera_set_awb block="%id|摄像头白平衡 %wb"
    //% group="设置" advanced=true
    void cameraSetAwb(MuId id, MuVsCameraWhiteBalance wb) {
        while(MU[id]->CameraSetAwb(wb) != MU_OK);
    }
    /**
     * 设置摄像头高帧率模式
     * @param id MU id
     * @param on 开启/关闭高帧率模式
     */
    //% blockId=mu3_camera_set_fps block="%id|高帧率模式$on"
    //% on.shadow="toggleOnOff" on.defl="true"
    //% group="设置" advanced=true
    void cameraSetFPS(MuId id, bool on) {
        while(MU[id]->CameraSetFPS(MuVsCameraFPS(on)) != MU_OK);
    }
    /**
     * 启用/关闭光线传感器的相关功能,手势检测无法与其他功能共有
     * @param id MU id
     * @param status 启用/关闭功能
     * @param[in] ls_type 光线传感器功能
     */
    //% blockId=MU3LsBegin block="%id|光线传感器|%status|%ls_type"
    //% group="光传感器" 
    void lsBegin(MuId id, MuStatus status, MuLsType ls_type) {
        if (status == Enable) {
            MU[id]->LsBegin(ls_type);
        } else {
            MU[id]->LsEnd(ls_type);
        }
    }
    /**
     * 设置光传感器灵敏度
     * @param id MU id
     * @param sensitivity 灵敏度
     */
    //% blockId=MU3LsSetSensitivity block="%id|光线传感器|设置灵敏度%sensitivity"
    //% group="光传感器"
    void lsSetSensitivity(MuId id, MuVsLsSensitivity sensitivity) {
        MU[id]->LsSetSensitivity(sensitivity);
    }
    /**
     * @brief 读取接近检测数据
     * @param id MU id
     * @retval 读取接近检测数据，返回 0~255
     */
    //% blockId=MU3LsReadProximity block="%id|光线传感器|读取接近检测"
    //% group="光传感器"
    uint8_t lsReadProximity(MuId id) {
        return MU[id]->LsReadProximity();
    }
    /**
     * @brief 读取环境光检测的数据
     * @param id MU id
     * @retval 读取环境光检测的数据, 0~65536.
     */
    //% blockId=MU3LsReadAmbientLight block="%id|光线传感器|读取环境光检测"
    //% group="光传感器"
    uint16_t lsReadAmbientLight(MuId id) {
        return MU[id]->LsReadAmbientLight();
    }
    // /**
    //  * Read light sensor color data.
    //  * @param id MU id
    //  * @param color_t kLsColorLabel:      get color label
    //  *                kLsColorRed:        get RGB R value(0~255)
    //  *                kLsColorGreen:      get RGB G value(0~255)
    //  *                kLsColorBlue:       get RGB B value(0~255)
    //  *                kLsColorHue:        get HSV H value(0~360)
    //  *                kLsColorSaturation: get HSV S value(0~255)
    //  *                kLsColorValue:      get HSV V value(0~255)
    //  * @retval Light sensor detected color data value
    //  */
    // //% blockId=mu3_ls_read_color block="%id|light sensor|read color%color_t"
    // //% group="Light Sensor"
    // //% deprecated=true
    // uint16_t LsReadColor(MuId id, MuVsLsColorType color_t) {
    //     return MU[id]->LsReadColor(color_t);
    // }
    /**
     * 获取视觉结果数据，此函数将自动更新视觉结果。
     * @param id MU id
     * @param vision_type: 视觉类型.
     * @param object_inf:  物体信息
     */
    //% blockId=mu3_get_value
    int getValue(MuId id, MuVsMessageVisionType vision_type, MuVsObjectInf object_inf) {
        return MU[id]->GetValue((MuVisionType)visionTypeEnumToMacro(vision_type), object_inf);
    }
    /**
     * @brief  write vision parameter.
     * @param id MU id
     * @param vision_type vision type.
     * @param object_inf  object information
     * @param value  value
     */
    //% blockId=mu3_write
    void write(MuId id, MuVsMessageVisionType vision_type, MuVsObjectInf object_inf, int value) {
        MU[id]->write((MuVisionType)visionTypeEnumToMacro(vision_type), object_inf, value);
    }
    /**
     * @brief Read gesture sensor data.
     * @retval Gesture witch MU detected.
     */
    //% blockId=mu3_ls_read_gesture
    MuVsLsGesture lsReadGesture(MuId id) {
        return MU[id]->LsReadGesture();
    }
}

//% weight=102 color="#11ACEF" icon="\uf1eb"
//% block=酷哥视觉-WiFi
namespace muvisionAT {
    int read8() {
        uint64_t time = system_timer_current_time();  
        int c = 0;
        do {
            c = uBit.serial.read(MicroBitSerialMode::ASYNC);
        } while(c==MICROBIT_NO_DATA && system_timer_current_time()-time<1000);  
        if (system_timer_current_time()-time>=1000) {    
            return -1;  
        }
        return c;
    }
    void write8(uint8_t c) {
        uBit.serial.sendChar(c);
    }
    MuVisionSensor3_AT MU3_AT(read8, write8);

    /**
     * 读取本地IP 
     */
    //% blockId=mu3_at_wifi_sip block="MU|读取本地IP"
    //% group="WiFi"
    String wifiSIP() {
        return MU3_AT.WifiSIP();
    }

    /**
     * 读取目标IP
     */
    //% blockId=mu3_at_wifi_cip block="MU|读取目标IP"
    //% group="WiFi"
    String wifiCIP() {
        return MU3_AT.WifiCIP();
    }
    /**
     * MU WiFi 配置
     */
    //% blockId=mu3_at_wifi_set block="MU|WiFi 设置|名称%ssid|密码%password|模式%apmode"
    //% group="WiFi"
    void wifiSet(String ssid, String password, MuAtMode apmode) {
        switch (apmode) {
            case ModeSTA:
                MU3_AT.WifiSet(ssid->getUTF8Data(), password->getUTF8Data(), "STA");
                break;
            case ModeAP:
                MU3_AT.WifiSet(ssid->getUTF8Data(), password->getUTF8Data(), "AP");
                break;
            default:
                break;
        }
    }

    /**
     * MU wifi 开启连接, 如果连接成功，返回`真`，否则，返回`假`
     */
    //% blockId=mu3_at_wifi_con block="MU|WiFi 连接|%status"
    //% status.shadow="toggleOnOff" status.defl="true"
    //% group="WiFi"
    bool wifiCon(bool status) {
        if (status) {
            return !MU3_AT.WifiCon("1");
        } else {
            return !MU3_AT.WifiCon("0");
        }
    }
    /**
     * MU wifi 设置目标IP和端口号
     */
    //% blockId=mu3_at_wifi_udp block="MU|WiFi 设置目标IP%ip|端口%port"
    //% group="WiFi"
    void wifiUDP(String ip, String port) {
        MU3_AT.WifiUDP(ip->getUTF8Data(), port->getUTF8Data());
    }
    /**
     * MU AT WiFi 读取数据 
     */
    //% blockId=mu3_at_wifi_read block="MU|WiFi 读取"
    //% group="WiFi"
    int wifiRead() {
        if (MU3_AT.available()) {
            return MU3_AT.read8();;
        }
        return read8();
    }
}
