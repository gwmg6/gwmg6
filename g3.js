{
  "warningText": "🐼提醒您:本软件接口长期更新维护 请放心使用🐼",
  "sites": [
      {
      "key": "js_荐片",
      "name": "推荐使用影音天堂App，或者VIP接口，尊享4K流畅高清",
      "type": 3,
      "api": "https://jihulab.com/dimaston1/4k/-/raw/main/libs/drpy2.min.js",
      "ext": "https://jihulab.com/dimaston1/4k/-/raw/main/js/荐片.js",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },

       {
      "key": "csp_XBPQ_haoxi",
      "name": "🍎┃好戏┃2K",
      "type": 3,
      "api": "csp_XBPQ",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "https://jihulab.com/dimaston1/4k/-/raw/main/json/好戏.json"
    },
     {
      "key": "子子",
      "name": "🗽┃子子┃2K",
      "type": 3,
      "changeable": 1,
      "jar": "http://xhww.fun:63/2.txt;md5;fa797d3f25f35eb3fea9a369bc55620f",
      "api": "csp_XBPQ",
      "playerType": "1",
      "ext": "https://jihulab.com/dimaston1/4k/-/raw/main/json/子子.json"
    },

    {
      "key": "往往",
      "name": "🐶┃汪汪┃2K",
      "type": 3,
      "playerType": 2,
      "api": "csp_XBPQ",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "https://jihulab.com/dimaston1/4k/-/raw/main/json/往往影视.json"
    },
    {
      "key": "csp_日后",
      "name": "🌜┃348┃2K",
      "type": 3,
      "jar": "https://jihulab.com/dimaston1/4k/-/raw/main/jar/H.jar",
      "api": "csp_XBPQ",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "https://jihulab.com/dimaston1/4k/-/raw/main/json/348影视.json"
    },

       {
      "key": "豆瓣",
      "name": "请到公众号:影音天堂，免费下载影音天堂App，尊享4K",
      "type": 3,
      "api": "https://agit.ai/guot54/ygbhx/raw/branch/master/lib/drpy2.min.js",
      "ext": "https://agit.ai/guot54/ygbh/raw/branch/master/JS/29_022812_drpy.js",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0
    }
     
  ],
  "parses": [
      {
      "name": "Json轮询",
      "type": 2,
      "url": "Sequence"
    },
    {
      "name": "Json并发",
      "type": 2,
      "url": "Parallel"
    },
     {
      "name": "解析聚合",
      "type": 3,
      "url": "Demo"
    },  
   {
		"name": "官解1",
		"type": 1,
		"url": "http://27.124.4.42:4567/jhjson/ceshi.php?url=",
		"ext": {
			"flag": ["qiyi", "爱奇艺", "奇艺", "youku", "优酷", "mgtv", "芒果", "letv", "乐视", "pptv", "PPTV", "sohu", "bilibili", "哔哩哔哩", "哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}
		}    
	},{
		"name": "官解2",
		"type": 1,
		"url": "http://110.42.2.247:880/analysis/json/?uid=2449&my=acfgikquvzFGJRW459&url=",
		"ext": {
			"flag": ["qiyi", "爱奇艺", "奇艺", "youku", "优酷", "mgtv", "芒果", "letv", "乐视", "pptv", "PPTV", "sohu", "xigua","bilibili", "哔哩哔哩", "哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}
		} 
    },
   
    {
      "name": "自动解析",
      "type": 1,
      "url": "http://27.124.4.42:4567/jhjson/ceshi.php?url="
    },
     {
      "name": "手动解析",
      "type": 1,
      "url": "http://json.xg688.top/api/?key=ApHG2jGcimQWPOj5mO&url="
    },
     {"name": "小书","type": 1,"url": "http://27.124.4.42:4567/jhjson/ceshi.php?url="},
    {"name": "玉米","type": 1,"url": "https://jx.lvdoui.com/api/?key=2df2141f41357bb5fc696bf6d3f56f00&url=","ext": {"flag": ["YuMi"],    "header": {"User-Agent": "okhttp/3.12.11"}}},
    {"name": "大厂","type": 1,"url": "http://110.42.2.247:880/analysis/json/?uid=2449&my=acfgikquvzFGJRW459&format=data&url="},
    {"name": "大厂1","type": 1,"url": "http://110.42.2.247:880/analysis/json/?uid=2384&my=bcijquvxAFKMUY0579&format=json&url="},
    {"name": "大厂2","type": 1,"url": "http://110.42.2.247:880/analysis/json/?uid=2255&my=eknpqvADFHOPR02458&format=json&url="},
    {"name": "大厂3","type": 1,"url": "http://110.42.2.247:880/analysis/json/?uid=2100&my=cdmqvxBNRSTUWXYZ19&mgtv=app&url="},

    {
      "name": "PM",
      "type": 1,
      "url": "http://27.124.4.42:4567/jhjson/ceshi.php?url=",
      "ext": {
        "flag": [
          "qq",
          "腾讯",
          "qiyi",
          "iqiyi",
          "爱奇艺",
          "奇艺",
          "youku",
          "优酷",
          "mgtv",
          "芒果",
          "letv",
          "乐视",
          "pptv",
          "PPTV",
          "sohu",
          "bilibili",
          "哔哩哔哩",
          "哔哩"
        ]
      }
    }
  ],
  "wallpaper": "https://picsum.photos/1280/720/?blur=10",
  "spider": "https://jihulab.com/duomv/xduo/-/raw/main/custom_spider.jar;md5;1948098B2A3D81773E059F00A1D97224",
  "lives": [
    {
      "name": "live",
      "type": 0,
      "url": "http://tvbox.love/live",
      "playerType": 1,
      "epg": "http://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    }
  ],
  "flags": [
    "youku",
    "qq",
    "iqiyi",
    "qiyi",
    "letv",
    "sohu",
    "tudou",
    "pptv",
    "mgtv",
    "wasu",
    "bilibili",
    "renrenmi"
  ],
  "ijk": [
    {
      "group": "软解码",
      "options": [
        {
          "category": 4,
          "name": "opensles",
          "value": "0"
        },
        {
          "category": 4,
          "name": "overlay-format",
          "value": "842225234"
        },
        {
          "category": 4,
          "name": "framedrop",
          "value": "1"
        },
        {
          "category": 4,
          "name": "soundtouch",
          "value": "1"
        },
        {
          "category": 4,
          "name": "start-on-prepared",
          "value": "1"
        },
        {
          "category": 1,
          "name": "http-detect-range-support",
          "value": "0"
        },
        {
          "category": 1,
          "name": "fflags",
          "value": "fastseek"
        },
        {
          "category": 2,
          "name": "skip_loop_filter",
          "value": "48"
        },
        {
          "category": 4,
          "name": "reconnect",
          "value": "1"
        },
        {
          "category": 4,
          "name": "enable-accurate-seek",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-auto-rotate",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-handle-resolution-change",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-hevc",
          "value": "0"
        },
        {
          "category": 1,
          "name": "dns_cache_timeout",
          "value": "600000000"
        }
      ]
    },
    {
      "group": "硬解码",
      "options": [
        {
          "category": 4,
          "name": "opensles",
          "value": "0"
        },
        {
          "category": 4,
          "name": "overlay-format",
          "value": "842225234"
        },
        {
          "category": 4,
          "name": "framedrop",
          "value": "1"
        },
        {
          "category": 4,
          "name": "soundtouch",
          "value": "1"
        },
        {
          "category": 4,
          "name": "start-on-prepared",
          "value": "1"
        },
        {
          "category": 1,
          "name": "http-detect-range-support",
          "value": "0"
        },
        {
          "category": 1,
          "name": "fflags",
          "value": "fastseek"
        },
        {
          "category": 2,
          "name": "skip_loop_filter",
          "value": "48"
        },
        {
          "category": 4,
          "name": "reconnect",
          "value": "1"
        },
        {
          "category": 4,
          "name": "enable-accurate-seek",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-auto-rotate",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-handle-resolution-change",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-hevc",
          "value": "1"
        },
        {
          "category": 1,
          "name": "dns_cache_timeout",
          "value": "600000000"
        }
      ]
    }
  ],
  "ads": [
    "mimg.0c1q0l.cn",
    "www.googletagmanager.com",
    "www.google-analytics.com",
    "mc.usihnbcq.cn",
    "mg.g1mm3d.cn",
    "mscs.svaeuzh.cn",
    "cnzz.hhttm.top",
    "tp.vinuxhome.com",
    "cnzz.mmstat.com",
    "www.baihuillq.com",
    "s23.cnzz.com",
    "z3.cnzz.com",
    "c.cnzz.com",
    "stj.v1vo.top",
    "z12.cnzz.com",
    "img.mosflower.cn",
    "tips.gamevvip.com",
    "ehwe.yhdtns.com",
    "xdn.cqqc3.com",
    "www.jixunkyy.cn",
    "sp.chemacid.cn",
    "hm.baidu.com",
    "s9.cnzz.com",
    "z6.cnzz.com",
    "um.cavuc.com",
    "mav.mavuz.com",
    "wofwk.aoidf3.com",
    "z5.cnzz.com",
    "xc.hubeijieshikj.cn",
    "tj.tianwenhu.com",
    "xg.gars57.cn",
    "k.jinxiuzhilv.com",
    "cdn.bootcss.com",
    "ppl.xunzhuo123.com",
    "xomk.jiangjunmh.top",
    "img.xunzhuo123.com",
    "z1.cnzz.com",
    "s13.cnzz.com",
    "xg.huataisangao.cn",
    "z7.cnzz.com",
    "xg.huataisangao.cn",
    "z2.cnzz.com",
    "s96.cnzz.com",
    "q11.cnzz.com",
    "thy.dacedsfa.cn",
    "xg.whsbpw.cn",
    "s19.cnzz.com",
    "z8.cnzz.com",
    "s4.cnzz.com",
    "f5w.as12df.top",
    "ae01.alicdn.com",
    "www.92424.cn",
    "k.wudejia.com",
    "vivovip.mmszxc.top",
    "cdnjs.hnfenxun.com",
    "cms.qdwght.com"
  ]
}
