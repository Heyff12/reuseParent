# 一、使用 subtree  

## 1、 拉取子项目代码  

```
git subtree add --prefix=reuse https://github.com/Heyff12/reuseSon.git master --squash
```

## 2、修改后提交子项目代码  

```
git subtree push --prefix=reuse https://github.com/Heyff12/reuseSon.git master
```

## 3、弊端

* 在angular项目中，组件需要 在module注册。 拉取过来的组件的module需要受到在 app.module.ts 中引入