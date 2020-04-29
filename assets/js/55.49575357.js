(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{301:function(s,a,n){"use strict";n.r(a);var t=n(28),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx"),n("OutboundLink")],1),s._v(" 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。")]),s._v(" "),n("h2",{attrs:{id:"nginx优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx优点"}},[s._v("#")]),s._v(" Nginx优点")]),s._v(" "),n("ul",[n("li",[s._v("支持高并发")]),s._v(" "),n("li",[s._v("内存消耗少")]),s._v(" "),n("li",[s._v("免费使用可以商业化")]),s._v(" "),n("li",[s._v("配置文件简单")]),s._v(" "),n("li",[s._v("反向代理，负载均衡")])]),s._v(" "),n("h2",{attrs:{id:"nginx版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx版本"}},[s._v("#")]),s._v(" Nginx版本")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx"),n("OutboundLink")],1),s._v("版本分为不同的版本.")]),s._v(" "),n("ul",[n("li",[s._v("Mainline version: 开发版本")]),s._v(" "),n("li",[s._v("Stable version: 稳定版本")]),s._v(" "),n("li",[s._v("legacy version: 历史版本")])]),s._v(" "),n("h2",{attrs:{id:"nginx安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装"}},[s._v("#")]),s._v(" Nginx安装")]),s._v(" "),n("h3",{attrs:{id:"查看nginx版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看nginx版本"}},[s._v("#")]),s._v(" 查看Nginx版本")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 安装必要程序")]),s._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++ autoconf pcre-devel "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" automake\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" httpd-tools "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 安装Nginx")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本号，可以确认是否安装成功")]),s._v("\nnginx -v\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" Nginx配置")]),s._v(" "),n("h3",{attrs:{id:"自定义错误页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义错误页面"}},[s._v("#")]),s._v(" 自定义错误页面")]),s._v(" "),n("p",[s._v("配置 /nginx/conf.d/default.conf")]),s._v(" "),n("ul",[n("li",[s._v("多错误指向一个页面")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("error_page   500 502 503 504  /50x.html;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("单独为错误")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("error_page 404  /404_error.html;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("错误码换成一个地址")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("error_page  404 http://www.baidu.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"访问控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问控制"}},[s._v("#")]),s._v(" 访问控制")]),s._v(" "),n("p",[s._v("允许特定主机访问，控制一些ip访问")]),s._v(" "),n("p",[s._v("default.conf里进行配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("location / {\n    deny   123.9.51.42;\n    allow  45.76.202.231;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"访问权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问权限"}},[s._v("#")]),s._v(" 访问权限")]),s._v(" "),n("h4",{attrs:{id:"指令优先级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指令优先级"}},[s._v("#")]),s._v(" 指令优先级")]),s._v(" "),n("p",[s._v("谁先触发，谁先起作用")]),s._v(" "),n("h4",{attrs:{id:"复杂访问控制权限配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂访问控制权限配置"}},[s._v("#")]),s._v(" 复杂访问控制权限配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("location =/img{\n    allow all;\n}\nlocation =/admin{\n    deny all;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"正则表达式设置访问权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式设置访问权限"}},[s._v("#")]),s._v(" 正则表达式设置访问权限")]),s._v(" "),n("p",[s._v("不允许访问所有php代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" location ~\\.php$ {\n    deny all;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"nginx启动停止重启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx启动停止重启"}},[s._v("#")]),s._v(" Nginx启动停止重启")]),s._v(" "),n("h3",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 直接启动")]),s._v("\nnginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. systemctl")]),s._v("\nsystemctl start nginx.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"停止"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[s._v("#")]),s._v(" 停止")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 从容停止")]),s._v("\nnginx -s quit\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 立即停止")]),s._v("\nnginx -s stop\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 暴力停止进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" nginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. systemctl")]),s._v("\nsystemctl start nginx.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"重启nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重启nginx"}},[s._v("#")]),s._v(" 重启nginx")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("systemctl restart nginx.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"重新载入配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新载入配置文件"}},[s._v("#")]),s._v(" 重新载入配置文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("nginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),n("h3",{attrs:{id:"静态资源服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态资源服务器"}},[s._v("#")]),s._v(" 静态资源服务器")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 虚拟主机server块\nserver {\n    # 端口\n    listen   8080;\n    # 匹配请求中的host值\n    server_name  localhost;\n    # 监听请求路径\n    location / {\n        # 查找目录\n        root /source;\n        # 默认查找\n        index index.html index.htm;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),n("p",[s._v("反向代理解决跨域问题")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server{\n    listen 80;\n    server_name nginx2.jspang.com;\n    location / {\n       proxy_pass http://jspang.com;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("其它反向代理指令")]),s._v(" "),n("ul",[n("li",[s._v("proxy_set_header :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。")]),s._v(" "),n("li",[s._v("proxy_connect_timeout:配置Nginx与后端代理服务器尝试建立连接的超时时间。")]),s._v(" "),n("li",[s._v("proxy_read_timeout : 配置Nginx向后端服务器组发出read请求后，等待相应的超时时间。")]),s._v(" "),n("li",[s._v("proxy_send_timeout：配置Nginx向后端服务器组发出write请求后，等待相应的超时时间。")]),s._v(" "),n("li",[s._v("proxy_redirect :用于修改后端服务器返回的响应头中的Location和Refresh。")])]),s._v(" "),n("h3",{attrs:{id:"适配pc或移动设备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适配pc或移动设备"}},[s._v("#")]),s._v(" 适配PC或移动设备")]),s._v(" "),n("ol",[n("li",[s._v("在/usr/share/nginx/目录下新建两个文件夹，分别为：pc和mobile目录")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/share/nginx\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" pc mobile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("在pc和miblic目录下，新建两个index.html文件，文件里下面内容")])]),s._v(" "),n("li",[n("p",[s._v("进入etc/nginx/conf.d目录下，修改8001.conf文件，改为下面的形式")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server{\n    listen 80;\n    server_name nginx2.jspang.com;\n    location / {\n        root /usr/share/nginx/pc;\n        if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {\n            root /usr/share/nginx/mobile;\n        }\n        index index.html;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"gzip压缩配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gzip压缩配置"}},[s._v("#")]),s._v(" Gzip压缩配置")]),s._v(" "),n("ul",[n("li",[s._v("gzip: 该指令用于开启或 关闭gzip模块。")]),s._v(" "),n("li",[s._v("gzip_buffers: 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。")]),s._v(" "),n("li",[s._v("gzip_disable: 可以通过该指令对一些特定的User-Agent不使用压缩功能。")]),s._v(" "),n("li",[s._v("gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的Content-length中进行获取。")]),s._v(" "),n("li",[s._v("gzip_http_version: 识别HTTP协议版本，其值可以是1.1.或1.0.")]),s._v(" "),n("li",[s._v("gzip_proxied: 用于设置启用或禁用从代理服务器上收到相应内容gzip压缩。")]),s._v(" "),n("li",[s._v("gzip_vary: 用于在响应消息头中添加Vary：Accept-Encoding,使代理服务器根据请求头中的Accept-Encoding识别是否启用gzip压缩。")])]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http {\n    # 开启gzip 压缩\n    gzip on;\n    # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）\n    gzip_http_version 1.1;\n    # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）\n    gzip_comp_level 4;\n    # 设置压缩的最小字节数， 页面Content-Length获取\n    gzip_min_length 1000;\n    # 设置压缩文件的类型  （text/html)\n    gzip_types text/plain application/javascript text/css;\n   .....\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"合并请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合并请求"}},[s._v("#")]),s._v(" 合并请求")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# js资源http-concat\n# nginx-http-concat模块的参数远不止下面三个，剩下的请查阅文档\nlocation /static/js/ {\n    concat on; # 是否打开资源合并开关\n    concat_types application/javascript; # 允许合并的资源类型\n    concat_unique off; # 是否允许合并不同类型的资源\n    concat_max_files 5; # 允许合并的最大资源数目\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"图片处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片处理"}},[s._v("#")]),s._v(" 图片处理")])])}),[],!1,null,null,null);a.default=e.exports}}]);