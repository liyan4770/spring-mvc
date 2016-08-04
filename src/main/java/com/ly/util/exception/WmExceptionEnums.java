package com.ly.util.exception;

import java.util.HashMap;
import java.util.Map;

/**
 * 业务状态枚举
 */
public enum WmExceptionEnums {

    //500以下的都为正常状态，根据不同业务，描述不一样

    SUCCESS(0,"成功"),

    //通用异常
    NOT_NULL_EXCEPTION(500,"参数不能为null"),

    TOKEN_EXCEPTION(501,"您已提交过，不能重复提交！"),

    //异常处理失败
    FAILURE(1000,"系统异常，请稍后重试！")

    ;




    private Integer id;
    private String desc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    WmExceptionEnums(Integer id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    private static Map<Integer, WmExceptionEnums> idMap = new HashMap<Integer, WmExceptionEnums>();

    static {
        for (WmExceptionEnums enums : WmExceptionEnums.values()) {
            idMap.put(enums.getId(), enums);
        }
    }

    /**
     * getDesc()查找描述
     *
     * @param id
     * @return
     */
    public static WmExceptionEnums valueOf(Integer id) {
        return idMap.get(id);
    }

    public static Map<Integer, WmExceptionEnums> getIdMap() {
        return idMap;
    }
}
