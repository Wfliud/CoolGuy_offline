// Auto-generated. Do not edit.


    declare const enum MuVsMessageVisionType
    {
    //% block="🌈 色块检测 "
    kVisionColorDetect = 1,
    //% block="🌈 颜色识别 "
    kVisionColorRecog = 2,
    //% block="⚽ 球"
    kVisionBall = 3,
    //% block="👥 人体"
    kVisionBody = 5,
    //% block="🔳 形状卡片"
    kVisionShapeCard = 6,
    //% block="🔳 交通卡片"
    kVisionTrafficCard = 7,
    //% block="🔳 数字卡片"
    kVisionNumberCard = 8,
    }


    declare const enum MuVsLedColor
    {
    //% block="关闭"
    kLedClose = 0,
    //% block="红色"
    kLedRed = 1,
    //% block="绿色"
    kLedGreen = 2,
    //% block="黄色"
    kLedYellow = 3,
    //% block="蓝色"
    kLedBlue = 4,
    //% block="紫色"
    kLedPurple = 5,
    //% block="青色"
    kLedCyan = 6,
    //% block="白色"
    kLedWhite = 7,
    }


    declare const enum MuVsLed
    {
    //% block="所有"
    kLedAll = 2,
    //% block="1"
    kLed1 = 0,
    //% block="2"
    kLed2 = 1,
    }


    declare const enum MuVsMode
    {
    //% block="I2C"
    kI2CMode = 1,
    //% block="Serial"
    kSerialMode = 0,
    }


    declare const enum MuVsBaudrate
    {
    kBaud9600 = 0x00,
    kBaud19200 = 0x01,
    kBaud38400 = 0x02,
    kBaud57600 = 0x03,
    kBaud115200 = 0x04,
    kBaud230400 = 0x05,
    kBaud460800 = 0x06,
    kBaud921600 = 0x07,
    }


    declare const enum MuVsObjectInf
    {
    //% block="状态"
    kStatus = 0,
    //% block="横向坐标"
    kXValue = 1,
    //% block="纵向坐标"
    kYValue = 2,
    //% block="宽度"
    kWidthValue = 3,
    //% block="高度"
    kHeightValue = 4,
    //% block="标签"
    kLabel = 5,
    //% block="红色通道"
    kRValue = 6,
    //% block="绿色通道"
    kGValue = 7,
    //% block="蓝色通道"
    kBValue = 8,
    }


    declare const enum MuVsCameraZoom
    {
    //% block="自动"
    kZoomDefault = 0,
    //% block="等级1"
    kZoom1 = 1,
    //% block="等级2"
    kZoom2 = 2,
    //% block="等级3"
    kZoom3 = 3,
    //% block="等级4"
    kZoom4 = 4,
    //% block="等级5"
    kZoom5 = 5,
    }


    declare const enum MuVsCameraWhiteBalance
    {
    //% block="自动"
    kAutoWhiteBalance = 0,
    //% block="锁定"
    kLockWhiteBalance = 1,
    //% block="白光模式"
    kWhiteLight = 2,
    //% block="黄光模式"
    kYellowLight = 3,
    }


    declare const enum MuVsVisionLevel
    {
    //% block="自动"
    kLevelDefault = 0,
    //% block="高速"
    kLevelSpeed = 1,
    //% block="平衡"
    kLevelBalance = 2,
    //% block="准确"
    kLevelAccuracy = 3,
    }


    declare const enum MuVsLsSensitivity
    {
    //% block="自动"
    kSensitivityDefault = 0,
    //% block="低"
    kSensitivity1 = 1,
    //% block="中"
    kSensitivity2 = 2,
    //% block="高"
    kSensitivity3 = 3,
    }


    declare const enum MuVsLsGesture
    {
    //%block="上划"
    kGestureUp = 1,
    //%block="下划"
    kGestureDown = 2,
    //%block="左划"
    kGestureLeft = 3,
    //%block="右划"
    kGestureRight = 4,
    //%block="前进"
    kGesturePush = 5,
    //%block="后退"
    kGesturePull = 6,
    }


    declare const enum MuVsLsColorType
    {
    //% block="颜色标签"
    kLsColorLabel = 0,
    //% block="红色通道"
    kLsColorRed = 1,
    //% block="绿色通道"
    kLsColorGreen = 2,
    //% block="蓝色 通道"
    kLsColorBlue = 3,
    //% block="色调"
    kLsColorHue = 4,
    //% block="饱和度"
    kLsColorSaturation = 5,
    //% block="色值"
    kLsColorValue = 6,
    }


    declare const enum MuId {
    //% block="MU00"
    Mu00 = 0,
    //% block="MU01"
    Mu01 = 1,
    //% block="MU10"
    Mu10 = 2,
    //% block="MU11"
    Mu11 = 3,
    }


    declare const enum MuStatus {
    //% block="启用"
    Enable = 1,
    //% block="关闭"
    Disable = 0,
    }


    declare const enum MuLsType {
    //% block="接近检测"
    LsProximity = 1,
    //% block="环境光检测"
    LsAmbientLight = 2,
    //% block="手势检测"
    LsGesture = 8,
    }


    declare const enum MuAtMode {
    //%block="客户端"
    ModeSTA = 0,
    //%block="热点"
    ModeAP = 1,
    }
declare namespace muvision {
}
declare namespace muvisionAT {
}

// Auto-generated. Do not edit. Really.
