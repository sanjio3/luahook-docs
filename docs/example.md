# LuaHook内置函数使用说明

由于LuaHook是开源的，所以不懂的可以直接看源码

为了更快上手LuaHook这里写了一份使用说明


注:

```lua
[] 是可选参数
param... 是可变参数
```

## 1.`HookLib`库

### log 日志

```lua
log(any)
```

实质两次log

`XposedBridge.log(any.toString())`

`Log.d("LuaXposed",any.toString())`


### findClass 找类

```lua
clazz = findClass("class" [,classloader] )
```

参数1是`类名`，参数2可选是`类加载器`(默认lpparam.classLoader)

返回找到的类Class，未找到返回nil


### pcall 安全的调用

```lua
isok,err = pcall(function()
	-- 代码
end)
```

isok(布尔值)为代码是否成功执行，如果失败那么err(字符串)为错误信息

函数内部环境与外部一致

也可接收传参

```lua
pcall(function(a,b)
	-- 代码
end,"a",1)
```



### hook

#### 第一种形式

```lua
hook("class",
ClassLoader,
"method",
params...,
function(it)
	-- before代码
end,
function(it)
	-- after代码
end)
```

解释一下两个`function`，第一个是在函数执行前进行hook（一般用于改参数），第二个是函数执行后hook（一般用于改返回值）

这里的`it`对应xposed的`MethodHookParam`类型，可以和类似java的方式操作它，比如获取实例`it.thisObject`,返回值`it.result`,参数`it.args[0]`


这里举个例子说明

要hook，com.xxx类的add方法

```java
package com.xxx

public class xxx {
	public int add(int a,int b) {
		return a+b;
	}
}
```

这里写一个修改参数和返回值的例子

```lua
-- hook 代码
hook("com.xxx",
lpparam.classLoader,
"add",
"int","int",
function(it)
	it.args[0] = 1  -- 参数1改成1
	it.args[1] = 2	-- 参数2改成2
end,
function(it)
	it.result = 0	-- 返回值改成0
end)
```


#### 第二种形式


```lua
hook(method,
function(it)
	-- before代码
end,
function(it)
	-- after代码
end)
```

未完待续......................
