# Service 
Service是在复杂业务场景下对业务逻辑封装的一个抽象层。提供这个抽象有以下几个好处：
+ 保持Controller中的逻辑更加简洁；
+ 保存业务的独立性，抽象出来的Service可以被多个Controller复用。
+ 将逻辑与展现分离，更容易编写测试用例。

使用场景
+ 复杂数据的处理
+ 调用第三方服务

属性
每次用户请求，框架都会实例化对应的Service实例，它具有以下属性：
+ ctx 当前请求的上下文`Context`对象的实例；
+ app 当前应的`Application`对象的实例；
+ service 应用定义的`Service`；
+ config  应用运行时的配置项；
+ logger 日志对象。
  
