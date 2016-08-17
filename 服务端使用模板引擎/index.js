const express = require('express'),

	  template = require('art-template'),
	  
	  app = express()
	  
/*
 * 静态页面：保存在服务器站点显得html文件，这个页面只需要在浏览器访问的时候服务器进行返回。
 * 动态页面：是服务器使用一定的程序（模板引擎）根据数据格式，动态生成一个html页面。
 */
app.get('/',(request,response)=>{
	
	var data = {
				
				title:'推荐的书籍和网站',
				
				list:[
					{
						type:'book',
						name:'HTML5 CSS3权威指南',
						img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3308341449,3784809844&fm=116&gp=0.jpg',
						description:'该书详尽地讲解了html 5和css 3的所有新功能和新特性；技术新颖，所有知识点都紧跟html 5与css 3的最新发展动态（html 5和css 3仍在不断完善之中）；实战性强（包含246个示例页面），不仅每个知识点都配有精心设计的小案例（便于动手实践），而且还有两个综合性的案例（体现用 html 5与css 3开发web应用的思维和方法）。本书不仅能满足你全面而系统地学习理论知识的需求，还能满足你需要充分实践的需求。'
					},
					{
						type:'websit',
						name:'MDN',
						url:'http://developer.mozilla.org',
						description:'Mozilla 开发者网络(MDN)提供有关开放网络技术(Open Web)的信息,包括 HTML、CSS 和万维网及 HTML5 应用的 API。它还记录了 Mozilla 产品的文档,例如 Firefox ...'
					},
					{
						type:'websit',
						name:'GitHub',
						url:'http://www.github.com',
						description:'gitHub可以托管各种git库，并提供一个web界面，但与其它像 SourceForge或Google Code这样的服务不同，GitHub的独特卖点在于从另外一个项目进行分支的简易性。为一个项目贡献代码非常简单：首先点击项目站点的“fork”的按钮，然后将代码检出并将修改加入到刚才分出的代码库中，最后通过内建的“pull request”机制向项目负责人申请代码合并。已经有人将GitHub称为代码玩家的MySpace。'
					}
				]
			}
	
	var html =  template('test',data)
	
	response.end(html)
})

app.listen(3000,()=>{
	
	console.log('server running。。。')
})
