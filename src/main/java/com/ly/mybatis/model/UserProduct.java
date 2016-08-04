package com.ly.mybatis.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "user_product")
public class UserProduct {
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "PARENT_PROD_ID")
    private Integer parentProdId;

    @Column(name = "CREATE_DATE")
    private Date createDate;

    @Column(name = "UPDATE_DATE")
    private Date updateDate;

    @Column(name = "PROD_NAME")
    private String prodName;

    @Column(name = "PROD_TYPE")
    private String prodType;

    @Column(name = "CREATE_USER")
    private String createUser;

    @Column(name = "UPDATE_USER")
    private String updateUser;

    /**
     * @return ID
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
     * @return PARENT_PROD_ID
     */
    public Integer getParentProdId() {
        return parentProdId;
    }

    /**
     * @param parentProdId
     */
    public void setParentProdId(Integer parentProdId) {
        this.parentProdId = parentProdId;
    }

    /**
     * @return CREATE_DATE
     */
    public Date getCreateDate() {
        return createDate;
    }

    /**
     * @param createDate
     */
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    /**
     * @return UPDATE_DATE
     */
    public Date getUpdateDate() {
        return updateDate;
    }

    /**
     * @param updateDate
     */
    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    /**
     * @return PROD_NAME
     */
    public String getProdName() {
        return prodName;
    }

    /**
     * @param prodName
     */
    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    /**
     * @return PROD_TYPE
     */
    public String getProdType() {
        return prodType;
    }

    /**
     * @param prodType
     */
    public void setProdType(String prodType) {
        this.prodType = prodType;
    }

    /**
     * @return CREATE_USER
     */
    public String getCreateUser() {
        return createUser;
    }

    /**
     * @param createUser
     */
    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    /**
     * @return UPDATE_USER
     */
    public String getUpdateUser() {
        return updateUser;
    }

    /**
     * @param updateUser
     */
    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }
}