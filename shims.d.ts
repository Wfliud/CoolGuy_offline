// Auto-generated. Do not edit.



    //% weight=103 color="#ff6600" icon="\uf110"
    //% block=酷哥视觉
declare namespace muvision {

    /**
     * 初始化视觉传感器
     */
    //% blockId=mu3_begin block="初始化|%id|端口%port"
    //% group="设置" shim=muvision::begin
    function begin(id: MuId, port: MuVsMode): void;

    /**
     * 恢复默认设置
     */
    //% blockId=mu3_set_default block="%id|恢复默认设置"
    //% group="设置" shim=muvision::setDefault
    function setDefault(id: MuId): void;

    /**
     * 开始视觉算法
     */
    //% blockId=mu3_vision_begin block="%id|%enable|算法%type"
    //% group="设置" shim=muvision::visionBegin
    function visionBegin(id: MuId, status: MuStatus, type: MuVsMessageVisionType): void;

    /**
     * 设置LED颜色
     * @param id MU id
     * @param led LED类型
     * @param detected_color 识别到目标物体时LED颜色
     * @param undetected_color 未识别到目标物体时LED颜色.
     */
    //% blockId=mu3_led_set_color block="%id|LED %led|检测到物体时显示%detected_color|否则%undetected_color"
    //% weight=200 inlineInputMode=inline
    //% group="设置" advanced=true shim=muvision::ledSetColor
    function ledSetColor(id: MuId, led: MuVsLed, detected_color: MuVsLedColor, undetected_color: MuVsLedColor): void;

    /**
     * 设置算法等级
     * @param id MU id
     * @param type 算法类型
     * @param level 算法等级
     */
    //% blockId=mu3_vision_set_level block="%id|算法%VISION_TYPE|性能%level"
    //% group="设置" advanced=true shim=muvision::visionSetLevel
    function visionSetLevel(id: MuId, type: MuVsMessageVisionType, level: MuVsVisionLevel): void;

    /**
     * 摄像头设置数码变焦
     * @param id MU id
     * @param zoom 数码变焦值
     */
    //% blockId=mu3_camera_set_zoom block="%id|数码变焦%level"
    //% group="设置" advanced=true shim=muvision::cameraSetZoom
    function cameraSetZoom(id: MuId, zoom: MuVsCameraZoom): void;

    /**
     * 摄像头设置白平衡
     * @param id MU id
     * @param wb 白平衡模式
     */
    //% blockId=mu3_camera_set_awb block="%id|摄像头白平衡 %wb"
    //% group="设置" advanced=true shim=muvision::cameraSetAwb
    function cameraSetAwb(id: MuId, wb: MuVsCameraWhiteBalance): void;

    /**
     * 设置摄像头高帧率模式
     * @param id MU id
     * @param on 开启/关闭高帧率模式
     */
    //% blockId=mu3_camera_set_fps block="%id|高帧率模式$on"
    //% on.shadow="toggleOnOff" on.defl="true"
    //% group="设置" advanced=true on.defl=1 shim=muvision::cameraSetFPS
    function cameraSetFPS(id: MuId, on?: boolean): void;

    /**
     * 启用/关闭光线传感器的相关功能,手势检测无法与其他功能共有
     * @param id MU id
     * @param status 启用/关闭功能
     * @param[in] ls_type 光线传感器功能
     */
    //% blockId=MU3LsBegin block="%id|光线传感器|%status|%ls_type"
    //% group="光传感器" shim=muvision::lsBegin
    function lsBegin(id: MuId, status: MuStatus, ls_type: MuLsType): void;

    /**
     * 设置光传感器灵敏度
     * @param id MU id
     * @param sensitivity 灵敏度
     */
    //% blockId=MU3LsSetSensitivity block="%id|光线传感器|设置灵敏度%sensitivity"
    //% group="光传感器" shim=muvision::lsSetSensitivity
    function lsSetSensitivity(id: MuId, sensitivity: MuVsLsSensitivity): void;

    /**
     * @brief 读取接近检测数据
     * @param id MU id
     * @retval 读取接近检测数据，返回 0~255
     */
    //% blockId=MU3LsReadProximity block="%id|光线传感器|读取接近检测"
    //% group="光传感器" shim=muvision::lsReadProximity
    function lsReadProximity(id: MuId): uint8;

    /**
     * @brief 读取环境光检测的数据
     * @param id MU id
     * @retval 读取环境光检测的数据, 0~65536.
     */
    //% blockId=MU3LsReadAmbientLight block="%id|光线传感器|读取环境光检测"
    //% group="光传感器" shim=muvision::lsReadAmbientLight
    function lsReadAmbientLight(id: MuId): uint16;

    /**
     * 获取视觉结果数据，此函数将自动更新视觉结果。
     * @param id MU id
     * @param vision_type: 视觉类型.
     * @param object_inf:  物体信息
     */
    //% blockId=mu3_get_value shim=muvision::getValue
    function getValue(id: MuId, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf): int32;

    /**
     * @brief  write vision parameter.
     * @param id MU id
     * @param vision_type vision type.
     * @param object_inf  object information
     * @param value  value
     */
    //% blockId=mu3_write shim=muvision::write
    function write(id: MuId, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf, value: int32): void;

    /**
     * @brief Read gesture sensor data.
     * @retval Gesture witch MU detected.
     */
    //% blockId=mu3_ls_read_gesture shim=muvision::lsReadGesture
    function lsReadGesture(id: MuId): MuVsLsGesture;
}



    //% weight=102 color="#11ACEF" icon="\uf1eb"
    //% block=酷哥视觉-WiFi
declare namespace muvisionAT {

    /**
     * 读取本地IP 
     */
    //% blockId=mu3_at_wifi_sip block="MU|读取本地IP"
    //% group="WiFi" shim=muvisionAT::wifiSIP
    function wifiSIP(): string;

    /**
     * 读取目标IP
     */
    //% blockId=mu3_at_wifi_cip block="MU|读取目标IP"
    //% group="WiFi" shim=muvisionAT::wifiCIP
    function wifiCIP(): string;

    /**
     * MU WiFi 配置
     */
    //% blockId=mu3_at_wifi_set block="MU|WiFi 设置|名称%ssid|密码%password|模式%apmode"
    //% group="WiFi" shim=muvisionAT::wifiSet
    function wifiSet(ssid: string, password: string, apmode: MuAtMode): void;

    /**
     * MU wifi 开启连接, 如果连接成功，返回`真`，否则，返回`假`
     */
    //% blockId=mu3_at_wifi_con block="MU|WiFi 连接|%status"
    //% status.shadow="toggleOnOff" status.defl="true"
    //% group="WiFi" status.defl=1 shim=muvisionAT::wifiCon
    function wifiCon(status?: boolean): boolean;

    /**
     * MU wifi 设置目标IP和端口号
     */
    //% blockId=mu3_at_wifi_udp block="MU|WiFi 设置目标IP%ip|端口%port"
    //% group="WiFi" shim=muvisionAT::wifiUDP
    function wifiUDP(ip: string, port: string): void;

    /**
     * MU AT WiFi 读取数据 
     */
    //% blockId=mu3_at_wifi_read block="MU|WiFi 读取"
    //% group="WiFi" shim=muvisionAT::wifiRead
    function wifiRead(): int32;
}

// Auto-generated. Do not edit. Really.
