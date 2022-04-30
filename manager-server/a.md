## 异常和埋点上报

### 上送的日志主要分为 3 类

  - 普通日志
  - 异常日志
  - 用户行为

#### 普通日志
  - 主要用于线上，场测环境下各种问题 debug 和错误原因分析
  - 页面加载流程的监控

#### 异常日志
  - 逻辑错误       
  - 数据类型错误   
  - 语法错误
  - 网络错误
  - 系统错误
通过一下 4 种方式进行捕获
  
  - window.onerror  运行时错误（包括语法错误）
  - unhandledrejection   promise 被 reject 且
  - request error
  - vue.config.errorHandler