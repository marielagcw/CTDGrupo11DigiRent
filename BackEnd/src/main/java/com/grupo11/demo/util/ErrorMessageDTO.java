package com.grupo11.demo.util;

public class ErrorMessageDTO {

    private String reason;
    private String message;
    private Integer code;

    public ErrorMessageDTO() {
    }

    public ErrorMessageDTO(String reason, String message, Integer code) {
        this.reason = reason;
        this.message = message;
        this.code = code;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}
