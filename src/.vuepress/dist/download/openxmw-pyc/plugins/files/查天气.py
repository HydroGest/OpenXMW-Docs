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