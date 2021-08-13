//% weight=103 color="#ff6600" icon="\uf110"
//% block=酷哥视觉
namespace muvision
{
    export enum VisionType {
        //% block="🌈 色块检测"
        VisionColorBlockDetect=1,
        //% block="⚽ 球"
        VisionBallDetect=3,
        //% block="👥 人体"
        VisionBodyDetect=5,
        //% block="🔳 形状卡片"
        VisionShapeCardDetect=6,
        //% block="🔳 交通卡片"
        VisionTrafficCardDetect=7,
        //% block="🔳 数字卡片"
        VisionNumCardDetect=8
    }
    export enum CardType {
        //% block="🔳 形状卡片"
        VisionShapeCardDetect = 6,
        //% block="🔳 交通卡片"
        VisionTrafficCardDetect,
        //% block="🔳 数字卡片"
        VisionNumCardDetect
    }
    export enum TrafficCardType {
        //% block="⬆ 前进"
        TrafficCardForward = 1,
        //% block="⬅ 向左"
        TrafficCardLeft,
        //% block="➡ 向右"
        TrafficCardRight,
        //% block="🔙 调头"
        TrafficCardTURN_AROUND,
        //% block="🅿️ 停止"
        TrafficCardPark
    }
    export enum ShapeCardType {
        //% block="✔ 勾"
        ShapeCardTick = 1,
        //% block="✖ 叉"
        ShapeCardCross,
        //% block="⭕ 圆圈"
        ShapeCardCircle,
        //% block="◻ 正方形"
        ShapeCardSquare,
        //% block="🛆 三角形"
        ShapeCardTriangle
    }
    export enum ColorType {
        //% block="黑色"
        Black = 1,
        //% block="白色"
        White,
        //% block="红色"
        Red,
        //% block="黄色"
        Yellow,
        //% block="绿色"
        Green,
        //% block="青色"
        Cyan,
        //% block="蓝色"
        Blue,
        //% block="紫色"
        Purple,
        //% block="其他"
        Unkown = 0
    }
    export enum NumCardType {
        //% block="1"
        NumCard1 = 1,
        //% block="2"
        NumCard2,
        //% block="3"
        NumCard3,
        //% block="4"
        NumCard4,
        //% block="5"
        NumCard5,
        //% block="6"
        NumCard6,
        //% block="7"
        NumCard7,
        //% block="8"
        NumCard8,
        //% block="9"
        NumCard9,
        //% block="0"
        NumCard0 = 0,
    }
    export enum Params {
        //% block="横向坐标"
        Horizontal = 1,
        //% block="纵向坐标"
        Vertical,
        //% block="宽度"
        Width,
        //% block="高度"
        Height,
        //% block="标签"
        Lable
    }
    export enum ColorParams {
        //% block="红色通道"
        RedChannal = 6,
        //% block="绿色通道"
        GreenChannal = 7,
        //% block="蓝色通道"
        BlueChannal = 8,
        //% block="标签"
        Label = 5
    }

    /**
     * 设置颜色识别识别区域
     * @param id MU id
     * @param width 识别区域宽度
     * @param height 识别区域高度
     */
    //% blockId=mu3_color_rcg_set_region block="%id|🌈 颜色识别 设置识别区域|宽度 =%width|高度 =%height"
    //% width.min=0 width.max=100 width.defl=5
    //% height.min=0 height.max=100 height.defl=5
    //% group="设置" advanced=true
    export function colorRcgSetRegion(id: MuId, width: number, height: number)
    {
        muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kWidthValue, width);
        muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kHeightValue, height);
    }
    /**
     * 设置算法色块检测最小识别的色块大小
     * @param id MU id
     * @param width 最小识别宽度
     * @param height 最小识别高度
     */
    //% blockId=mu3_color_block_set_min_size block="%id|🌈 色块检测 设置最小识别尺寸|宽度 =%width|高度 =%height"
    //% width.min=0 width.max=100 width.defl=5
    //% height.min=0 height.max=100 height.defl=5
    //% group="设置" advanced=true
    export function colorBlockSetMinRecognitionSize(id: MuId, width: number, height: number)
    {
        muvision.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kWidthValue, width);
        muvision.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kHeightValue, height);
    }
    /**
     * 获取算法检测状态
     * @param id MU id
     * @param type 视觉算法类型
     */
    //% blockId=mu3_detected block="%id|检测到%type" color="#2E8B57"
    //% group="运行"
    export function detected(id: MuId, type: MuVsMessageVisionType): boolean{
        return muvision.getValue(id, type, MuVsObjectInf.kStatus) ? true : false} let x_last = -1;
    let y_last = -1;
    /**
     * 设置颜色识别中心点参数，并返回检测状态
     * @param id MU id
     * @param x 横向中心点(0~100)
     * @param y 纵向中心点(0~100)
     */
    //% blockId=mu3_color_rcg_detected block="%id|识别到坐标|x =%x|y =%y|颜色" color="#2E8B57"
    //% x.min=0 x.max=100 x.defl=50
    //% y.min=0 y.max=100 y.defl=50
    //% group="运行"
    export function colorRcgDetected(id: MuId, x: number, y: number): boolean
    {
        x = x > 100 ? 100 : (x < 0 ? 0 : x);
        y = y > 100 ? 100 : (y < 0 ? 0 : y);
        if (x != x_last)
        {
            x_last = x;
            muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kXValue, x);
        }
        if (y != y_last)
        {
            y_last = y;
            muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kYValue, y);
        }
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kStatus) ? true : false
    }
    let label_last = -1;
    /**
     * 设置色块检测的颜色类型，并返回检测状态
     * @param id MU id
     * @param label 颜色类型
     */
    //% blockId=mu3_get_color_block_detect block="%id|检测到%color|色块" color="#2E8B57"
    //% group="运行"
    export function colorBlockDetected(id: MuId, label: ColorType): boolean
    {
        if (label_last != label)
        {
            label_last = label;
            muvision.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kLabel, label)
        }
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kStatus) ? true : false
    }
    /**
     * 获取算法结果
     * @param id MU id
     * @param type 算法类型
     * @param item 参数类型
     */
    //% block="获取%id|算法%type|%item|值" color="#2E8B57"
    //% group="运行"
    export function visionValue(id: MuId, type: VisionType, item: Params): number
    {
        return muvision.getValue(id, <number>type, <number>item)
    }
    /**
     * 获取颜色识别算法结果
     * @param id MU id
     * @param item 颜色类型
     */
    //% block="获取%id|算法 🌈 颜色识别|%item" color="#2E8B57"
    //% group="运行"
    export function colorRcgValue(id: MuId, item: ColorParams): number
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorRecog, <number>item)
    }
    /**
     * 获取形状卡片识别的卡片类型
     * @param id MU id
     * @param type 卡片类型
     */
    //% blockId=mu3_shape_card_type block="获取%id|算法 🔳 形状卡片|type =%type" color="#2E8B57"
    //% group="运行"
    export function shapeCardType(id: MuId, type: ShapeCardType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionShapeCard, MuVsObjectInf.kLabel) == type
    }
    /**
     * 获取交通卡片识别的卡片类型
     * @param id MU id
     * @param type 卡片类型
     */
    //% blockId=mu3_traffic_card_type block="获取%id|🔳 交通卡片|type =%type" color="#2E8B57"
    //% group="运行"
    export function trafficCardType(id: MuId, type: TrafficCardType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionTrafficCard, MuVsObjectInf.kLabel) == type
    }
    /**
     * 获取数字卡片识别的卡片类型
     * @param id MU id
     * @param type 卡片类型
     */
    //% blockId=mu3_number_card_type block="获取%id|🔳 数字卡片|type =%type" color="#2E8B57"
    //% group="运行"
    export function numberCardType(id: MuId, type: NumCardType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionNumberCard, MuVsObjectInf.kLabel) == type
    }
    /**
     * 获取颜色识别结果标签类型
     * @param id MU id
     * @param type 颜色类型
     */
    //% blockId=mu3_color_rcg_type block="获取%id|🌈 颜色识别 颜色 =%color" color="#2E8B57"
    //% group="运行"
    export function colorRecognizeType(id: MuId, color: ColorType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kLabel) == color;
    }
    let gesture = 0;
    /**
     * 获取手势检测状态
     * @param id MU id
     */
    //% blockId=mu3_gesture_detect block=%id|光线传感器|检测到手势" color="#ff6600"
    //% group="光传感器"
    export function gestureDetect(id: MuId): boolean
    {
        gesture = muvision.lsReadGesture(id);
        return gesture ? true : false;
    }
    /**
     * 获取手势检测结果类型
     * @param id MU id
     * @param type 手势类型
     */
    //% blockId=mu3_gesture_type block="%id|光线传感器|手势 =%MuVsLsGesture" color="#ff6600"
    //% group="光传感器"
    export function gestureType(id: MuId, type: MuVsLsGesture): boolean
    {
        return gesture == type;
    }
}

//% weight=102 color="#11ACEF" icon="\uf1eb"
//% block=酷哥视觉-WiFi
namespace muvisionAT { }
