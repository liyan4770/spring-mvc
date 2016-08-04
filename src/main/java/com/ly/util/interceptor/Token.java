package com.ly.util.interceptor;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 防止重复提交的token注解
 * Created by protoss on 15-6-8.
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Token {
    /**
     * 在需要生成token的controller上增加@Token(save=true)
     */
    boolean save() default false;

    /**
     * 在需要检查重复提交的controller上添加@Token(remove=true)
     */
    boolean remove() default false;
}
