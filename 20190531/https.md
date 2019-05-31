let step = [{
    'from': 'client',
    'to': 'server',
    'do': '发送请求给服务器索要公钥',
    'payLoad': ['支持的协议版本', '客户端生成随机数 random-number-1', '支持的加密方法', '支持的压缩方法'],
}, {
    'from': 'server',
		'to': 'client',
    'do': '返回公钥',
    'payLoad': ['服务端生成随机数 random-number-2', '确定加密方法', '服务器证书'],
}, {
    'from': 'client',
		'to': 'server',
		'do': '验证证书，抽离公钥，编码改变通知，表示随后的信息都用加密，客户端握手结束',
    'payLoad': ['客户端另一个随机数 random-number-3 (pre-master-key）(使用公钥加密) '],
}, {
		'from': 'server',
		'to': 'client',
		'do': '收取最后一个随机数，生成会话密钥，最后再给客户端发送一条信息，编码改变通知，随后双方都用加密，服务端握手结束',
		'payLoad': ['公钥加密'],
}];
