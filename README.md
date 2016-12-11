开发一个react应用，第一步，环境搭建
````javascript
// npm install 对应的插件包
````
根据我们整个app功能，划分为不同的组件，这里我们github-finder项目只需要两个组件，搜索头组件以及结果展示组件
然后我们根据组件的功能来定义动作action，对应的actionTypes文件放在了consts文件夹下面

定义好actionTypes，就要定义对应的Action Function，放在actions中
action 一般划分为功能动作和ui动作

action定义好了，接下来我们需要定义state和reducers，initState存放的位置是consts目录的model.js
而reducers还是和action对应划分模式一样，分为data和ui两种类型，通过index.js抛出接口

项目完成