# 一、使用 subtree  

## 1、 拉取子项目代码  

```
git subtree add --prefix=reuse https://github.com/Heyff12/reuseSon.git master --squash
```

## 2、修改后提交子项目代码  

需要先把当前修改提交到本项目，再执行下面的 subtree 推送

```
git subtree push --prefix=reuse https://github.com/Heyff12/reuseSon.git master
```

这个提交会更新 subtree的库的代码； subtree库需要 pull 获取最新改动

## 3、 拉取子项目最新代码  

```
git subtree pull --prefix=reuse https://github.com/Heyff12/reuseSon.git master --squash
```


## 3、弊端

* 在angular项目中，组件需要 在module注册。 拉取过来的组件的module需要受到在 app.module.ts 中引入