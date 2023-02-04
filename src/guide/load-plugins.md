# 安装插件

## 简介

OpenXMW只提供了一个核心引擎（`core`），而应用于实际作品中的各种功能需要自己去编写。这些功能集被称为“**插件**”，插件为Scratch作品提供了一系列的“指令”，这些指令就是Python文件中的函数或自定义类中的函数。

## 安装插件

你可以从我们的插件中心（点击[这里](http://plugins.openxmw.hjfunny.site)或[这里](http://plugins.openxmw.mkc.icu)以跳转）下载别人的插件。插件通常是一个Python文件`*.py`或一个CPython文件`*.pyc`，例如`QQ.py`。

要安装一个插件非常简单，将插件文件下载到`./plugins/files/`文件夹下（该文件夹下有一个叫做`example.py`的插件文件作为例子），打开`./plugins/__init__.py`，在行尾加上要加载的插件名称，多个插件名称之间以英文逗号隔开。例如，要加载插件`plugin1.py`和`plugin2.py`，则需要将文件改为：

```python
from .files import plugin1,plugin2
```

随后重启`core.pyc`即可加载插件。


如果你需要在非小码王Scratch的任何编辑器上或非OpenXMW程序中使用OpenXMW插件，必须经过OpenXMW作者或插件作者同意，否则将被视为侵权。