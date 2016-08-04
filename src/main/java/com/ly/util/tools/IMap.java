package com.ly.util.tools;

/********************************************************************
 URL参数中有中文值，传到服务端，在用request.getParameter()方法，得到的常常会是乱码。

 这将涉及到字符解码操作，我们在应用中常常会用new String(fieldType.getBytes("iso-8859-1"), "UTF-8");等类似的方法去解码。
 但这种方式受具体应用环境限制，往往在应用部署环境发生改变时，还会出现中文乱码

 ********************************************************************/
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;

public class IMap extends HashMap {
    private String charset = "UTF-8";

    /**
     * 自动将页面数据放入PageData对象中,当从页面获取数据时 new的时候要传request
     * request.getParameter(arg0): get(arg0)或getString(arg0)
     * request.getParameterValues(arg0): getValues(arg0)方法
     * 本类也可以当做一个普通的Map使用，new的时候不要传参数
     */

    Map returnMap = null;
    HttpServletRequest request;

    // 普通的Map
    public IMap() {
        returnMap = new HashMap();
    }

    // 从页面获取数据
    public IMap(HttpServletRequest request) {
        this.request = request;
        // 返回值Map
        returnMap = new HashMap();

        // 参数Map
        Map properties = request.getParameterMap();
        Set<Entry> entrySet = properties.entrySet();
        for (Entry entry : entrySet) {
            String key = (String) entry.getKey();
            Object valueObj = entry.getValue();
            String value = "";
            if(null == valueObj){
                value = "";
            }else if(valueObj instanceof String[]){
                String[] values = (String[])valueObj;
                for(int i=0;i<values.length;i++){
                    value = values[i];
                    //如果是get方式的话
                    if (request.getMethod().equalsIgnoreCase("get")) {
                        value = values == null ? null : encoding(value, charset) ;
                        value = values == null ? null : decoding(value, charset);
                    }
                    value += ",";
                }
                value = value.substring(0, value.length()-1);
            }else{
                value = valueObj.toString();
            }
            returnMap.put(key, value);
        }
    }

    public Object put(Object key, Object value) {
        return returnMap.put(key, value);
    }

    public Object remove(Object key) {
        return returnMap.remove(key);
    }

    public void clear() {
        returnMap.clear();
    }

    public boolean containsKey(Object key) {
        return returnMap.containsKey(key);
    }

    public boolean containsValue(Object value) {
        return returnMap.containsValue(value);
    }

    public Set entrySet() {
        return returnMap.entrySet();
    }

    public boolean isEmpty() {
        return returnMap.isEmpty();
    }

    public Set keySet() {
        return returnMap.keySet();
    }

    public void putAll(Map t) {
        returnMap.putAll(t);
    }

    public int size() {
        return returnMap.size();
    }

    public Collection values() {
        return returnMap.values();
    }

    public Object get(Object key) {
        return returnMap.get(key);
    }

    // 本方法只能用于从页面获取数组，例如相同名字的checkbox
    public String[] getValues(Object key) {
        return request == null ? null : request.getParameterValues((String) key);
    }

    public String getString(Object key) {
        Object o = get(key);
        return o == null ? null : o.toString();
    }

    public String getString(String name, String defaultValue) {
        String value = getString(name);
        return value == null ? defaultValue : value;
    }

    /**
     * get names
     *
     * @return String[]
     */
    public String[] getNames() {
        String[] names = (String[]) keySet().toArray(new String[0]);
        Arrays.sort(names);
        return names;
    }

    /**
     * get int
     *
     * @param name
     * @return int
     */
    public int getInt(String name) {
        return getInt(name, 0);
    }

    /**
     * get int
     *
     * @param name
     * @param defaultValue
     * @return int
     */
    public int getInt(String name, int defaultValue) {
        String value = getString(name, "");
        return "".equals(value) ? defaultValue : Integer.parseInt(value);
    }

    /**
     * get double
     *
     * @param name
     * @return double
     */
    public double getDouble(String name) {
        return getDouble(name, 0);
    }

    /**
     * get double
     *
     * @param name
     * @param defaultValue
     * @return double
     */
    public double getDouble(String name, double defaultValue) {
        String value = getString(name, "");
        return "".equals(value) ? defaultValue : Double.parseDouble(value);
    }

    /**
     * get boolean
     *
     * @param name
     * @return boolean
     */
    public boolean getBoolean(String name) {
        return getBoolean(name, false);
    }

    /**
     * get boolean
     *
     * @param name
     * @param defaultValue
     * @return boolean
     */
    public boolean getBoolean(String name, boolean defaultValue) {
        String value = getString(name, "");
        return "".equals(value) ? defaultValue : Boolean.valueOf(value)
                .booleanValue();
    }




    private static String decoding(String target, String charset){
        try {
            if(target.contains("%")) return target;
            String result = URLDecoder.decode(target, charset);
            System.out.println("---------URLDecoder处理前：--------" + target +"--->处理后===" + result);
            return result;
        } catch (UnsupportedEncodingException e) {
            return target;
        }
    }

    /**
     * 读取参数列表，解决get中文传参数问题。
     */
    public String encoding(String target, String charset) {
        System.out.println("编码转换之前：" + target);
        try {
            return new String(target.trim().getBytes("ISO-8859-1"), charset);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return target;
        }
    }
}
