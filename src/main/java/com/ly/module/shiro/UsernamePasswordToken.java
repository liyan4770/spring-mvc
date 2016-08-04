
package com.ly.module.shiro;

/**
 * 用户和密码（包含验证码）令牌类
 * @author ostrich
 * @version 2013-5-19
 */
public class UsernamePasswordToken extends org.apache.shiro.authc.UsernamePasswordToken {

	private static final long serialVersionUID = 1L;

	private boolean ssoFlag = false;
	private String captcha;

	public String getCaptcha() {
		return captcha;
	}

	public void setCaptcha(String captcha) {
		this.captcha = captcha;
	}

	public UsernamePasswordToken() {
		super();
	}

	public UsernamePasswordToken(String username, char[] password,
								 boolean rememberMe, String host, String captcha) {
		super(username, password, rememberMe, host);
		this.captcha = captcha;
	}
	public UsernamePasswordToken(String username, char[] password,
								 boolean rememberMe, String host, String captcha, boolean ssoFlag) {
		super(username, password, rememberMe, host);
		this.captcha = captcha;
		this.ssoFlag = ssoFlag;
	}
	public boolean isSsoFlag() {
		return ssoFlag;
	}

	public void setSsoFlag(boolean ssoFlag) {
		this.ssoFlag = ssoFlag;
	}
}