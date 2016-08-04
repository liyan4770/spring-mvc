package com.ly.mybatis.model;

import javax.persistence.*;

@Table(name = "sys_user")
public class SysUser {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 1男 2女
     */
    private Integer sex;

    /**
     * 0 后台人员 1 服务商 2 客户
     */
    @Column(name = "user_type")
    private Integer userType;

    @Column(name = "login_id")
    private String loginId;

    private String password;

    @Column(name = "user_name")
    private String userName;

    private String email;

    private String phone;

    private String remarks;

    private String salt;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取1男 2女
     *
     * @return sex - 1男 2女
     */
    public Integer getSex() {
        return sex;
    }

    /**
     * 设置1男 2女
     *
     * @param sex 1男 2女
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * 获取0 后台人员 1 服务商 2 客户
     *
     * @return user_type - 0 后台人员 1 服务商 2 客户
     */
    public Integer getUserType() {
        return userType;
    }

    /**
     * 设置0 后台人员 1 服务商 2 客户
     *
     * @param userType 0 后台人员 1 服务商 2 客户
     */
    public void setUserType(Integer userType) {
        this.userType = userType;
    }

    /**
     * @return login_id
     */
    public String getLoginId() {
        return loginId;
    }

    /**
     * @param loginId
     */
    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return user_name
     */
    public String getUserName() {
        return userName;
    }

    /**
     * @param userName
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return phone
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @param phone
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * @return remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * @param remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * @return salt
     */
    public String getSalt() {
        return salt;
    }

    /**
     * @param salt
     */
    public void setSalt(String salt) {
        this.salt = salt;
    }
}