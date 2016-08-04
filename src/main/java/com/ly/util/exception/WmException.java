package com.ly.util.exception;


import java.io.PrintWriter;
import java.io.StringWriter;

public class WmException extends RuntimeException {

    public WmExceptionEnums enums;

    public WmException(WmExceptionEnums enums) {
        this.enums = enums;
    }

    public WmException(String message, WmExceptionEnums enums) {
        super(message);
        this.enums = enums;
    }

    public WmException(String message, Throwable cause, WmExceptionEnums enums) {
        super(message, cause);
        this.enums = enums;
    }

    public WmException(Throwable cause, WmExceptionEnums enums) {
        super(cause);
        this.enums = enums;
    }

    public WmException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, WmExceptionEnums enums) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.enums = enums;
    }

    public WmExceptionEnums getEnums() {
        return enums;
    }

    public void setEnums(WmExceptionEnums enums) {
        this.enums = enums;
    }

    public static String getStackTrace(Throwable t) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);

        try {
            t.printStackTrace(pw);
            return sw.toString();
        }
        finally {
            pw.close();
        }
    }
}
