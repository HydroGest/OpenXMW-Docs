# 快速上手

## 安装Python

### 环境
OpenXMW是由Python 3.7编写的，所以请前往[Python官网](https://www.python.org)下载**Python 3.7**，或[点此](https://cdn.npmmirror.com/binaries/python/3.7.0/python-3.7.0-amd64.exe)以从镜像站下载，并使用Python 3.7运行OpenXMW，否则可能带来一些未知的兼容性问题。

请在安装Python时勾选左下角的“Add Python 3.7 to PATH”或安装后手动操作以添加环境变量。在PowerShell或命令提示符中输入以下指令以检查Python 3.7是否安装成功：

```sh
python --version
```

若显示“Python 3.7.X”（具体版本号由下载的Python版本决定），则环境已成功搭建。

### 安装PyPi

我们通过PyPi管理OpenXMW使用到的依赖包/库，因此，在安装OpenXMW前，你需要安装PyPi（即pip），相关教程可在百度上被轻易找到。安装Python时，PyPi通常会被自动附带安装，所以你大可不必考虑这个。

### 下载OpenXMW

> #### 第三方OpenXMW启动器
> Hecode 为我们编写了使用方便、快捷的OpenXMW核心启动器，只要完成了上述步骤，你就可以直接运行核心启动器来运行OpenXMW。
> 
> 详见：[https://plugins.openxmw.mkc.icu/d/83-openxmw-he-xin-qi-dong-qi](https://plugins.openxmw.mkc.icu/d/83-openxmw-he-xin-qi-dong-qi)
> 
> 此OpenXMW启动器会自动下载最新的OpenXMW核心、安装依赖库、自动运行，你可以直接跳到“[运行](#运行)”章节。

我们建立了一个公共的下载站点供下载OpenXMW。

官方下载站：[点击跳转](/download)

镜像下载站：[敬请期待]()

下载`openxmw-pyc.zip`，并解压，打开目录。

目录结构应该是这样的：

```
./ 
    core.pyc
    xmwfunctions.pyc
    plugins/
        __init__.py
        files/
            example.py
```

其中，最顶层的目录是OpenXMW的项目根目录

### 安装依赖库

回到OpenXMW的项目根目录，使用PowerShell或命令提示符运行以下指令以下载并安装依赖库：

```sh
pip3 install websockets
pip3 install Beautifulsoup4
pip3 install requests
pip3 install json_tools
```

你可以选择在下载命令后加上`-i https://pypi.tuna.tsinghua.edu.cn/simple`使用镜像站以提高下载速度。

至此，准备工作大功告成。

## 运行

回到项目根目录，新建`start.bat`，并点击右键编辑，写入：
```shell
python3 core.pyc
pause
```

双击运行`start.bat`，不出意外的话，可以看到，程序开始运行了。


只需要根据程序提示分别输入信息并按下回车，就可以正常运行OpenXMW了！OpenXMW需要一个任意账号的Access-Token获取WsToken以实现云数据查看、修改，请点击浏览器网址前的“锁”标志，选择“Cookie”，复制xiaomawang.com中Cookie文件夹中的user_token的内容，并将其粘贴至程序控制台中输入。我们保证不会记录Access-Token或使用它做任何其它事情。

大功告成！

如果你需要中止程序，请按下 ctrl+c 以中断程序运行。