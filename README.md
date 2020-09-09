# 一、使用 subtree  

## 1、 拉取子项目代码  

```
git subtree add --prefix=reuse https://github.com/Heyff12/reuseSon.git master --squash
```

## 2、修改后提交子项目代码  

```
git subtree push --prefix=reuse https://github.com/Heyff12/reuseSon.git master
```

这个提交停留在当前项目的 reuse文件夹下面，远程被拉取仓库并不会更新

## 3、 拉取子项目最新代码  

```
git subtree pull --prefix=reuse https://github.com/Heyff12/reuseSon.git master --squash
```
如果当前项目更改了 子库代码，则pull 失败

## 3、弊端

* 在angular项目中，组件需要 在module注册。 拉取过来的组件的module需要受到在 app.module.ts 中引入