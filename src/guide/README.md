# 简介

## 什么是OpenXMW

OpenXMW是一个由[hjfunny](https://world.xiaomawang.com/w/person/project/all/1347431)和[Markchai](https://world.xiaomawang.com/w/person/project/all/693633)开发的小码王Scratch与Python的通信接口，它允许Scratch与Python进行交互！因此，利用它可以非常轻松地做到一些原版小码王Scratch不可能做到的操作，例如调用外部HTTP接口、AI等。OpenXMW提供了一个开放、通用的接口，供任何人使用Python编写插件，轻易实现用户需要的功能。**也就是说，以后可能不需要盼望官方出Scratch扩展了，因为你自己就可以编写插件实现想要的功能，或使用他人编写的插件。**~~（也就是说我们的竞争对手是小码王官方（不是~~

浏览插件社区，下载实用的插件：[点此跳转](https://plugins.openxmw.mkc.icu/)

## 原理

OpenXMW通过监听小码王的云数据，使用“云频道”（或“云通道”）的思想，实现Scratch和Python之间交互和通信。它扮演着Scratch与Python之间数据交互通道、中介的角色。

## 原则

我们秉持为社区和社区用户做贡献的原则，开发了OpenXMW项目。OpenXMW不应被用于任何破坏社区稳定的操作。**OpenXMW只应被使用在自己的作品中，禁止在他人的作品中使用OpenXMW**，否则可能造成严重的后果。

为了社区安全，OpenXMW的相关源码及核心功能不会被公开。**严禁**破解、修改、公布或以任何形式违规使用OpenXMW，或刻意/恶意搬运其工作模式并编写类似程序，否则将被视为侵权。违规者将会受到严厉处罚，并被禁止使用OpenXMW。

请勿通过违规手段获取或篡改OpenXMW的通信数据，违规者将会受到处罚并被禁止使用OpenXMW。

OpenXMW符合小码王社区的用户协议。在用户遵守此原则以及文档中的规定的情况下，OpenXMW受到小码王社区官方的明确支持。为防用户违规，我们已在OpenXMW程序中加入相应防范措施。

## 一个例子

### 查天气
![例子](/weather.jpg)

你可以编写`查天气`插件，以支持这个指令的运行（这个插件在插件社区可以找到，[点击跳转](http://plugins.openxmw.mkc.icu/d/2-cha-tian-qi-cha-jian)。

在`./plugins/files/`文件夹下创建`查天气.py`文件：
```python
def 天气(参数):
    try:
        from requests import get
        import json
        city = 参数['城市']
        url = 'https://v.api.aa1.cn/api/api-tianqi-3/index.php?msg=%s&type=1' % city
        resp = json.loads(get(url).text)['data']
        for data in resp:
            if data['riqi'] == 参数['星期']:
                返回 =data
        return {
            "温度":返回['wendu'],
            "天气":返回['tianqi'],
            "风度":返回['fengdu'],
            "空气":返回['pm']
        }
    except Exception as e:
        print(str(e))
        return {"error":str(e)}
```
接着，在Scratch运行积木，将会收到包含`温度`、`天气`、`风度`和`空气`的响应。你可以[点此](https://world.xiaomawang.com/community/main/compose/nUEj666J)跳转至包含此例子的作品。

![返回](/8.jpg)

使用OpenXMW还可以轻松实现与Scratch联通的QQ机器人等各种各样的功能，例如作品[《云频道：消息转发到QQ官方群》](https://world.xiaomawang.com/community/main/compose/m6Dj666J)

你也可以任意修改插件名称，但是要相应地修改Scratch作品中的指令名称和./plugins/files中的文件名称。

你可以向我们提出建设性意见、私下反馈问题或漏洞，我们会在小码王社区为做出特别贡献者每人发放500~50000金币。



OpenXMW作者hjfunny和Markchai保留OpenXMW的修改权和最终解释权，对于使用者操作不当或他人通过违规手段影响软件运行等行为产生的后果不负任何责任。运行OpenXMW即代表您同意此文档中的所有规定。