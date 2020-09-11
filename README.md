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

# 二、发布npm包  

## 1、 在子项目发包

* npm init
* 新建 .npmignore 忽略文件
* npm login
* npm publish

备注： fix 包的名字  @hey_ff/testbutton，发布时  
```
npm publish --access public
```

## 2、在本项目引用 

```
npm install @hey_ff/testbutton
```
* 需要在此项目进行编译  


## 3、优化  

* 在子项目进行build


# 三、子项目不发包，通过绝对路径引用  

## 1、将子项目的代码拉取到本项目，也可以使用第一种里面的subtree路径  

## 2、修改本项目的package.json
```
"btn": "file:./reuse/src/app/components",
```

## 3、在app.module.ts引入

```
// import {TheButtonComponent} from '@hey_ff/testbutton/the-button/the-button.component'
import {TheButtonComponent} from 'btn'

@NgModule({
  declarations: [
    AppComponent,TheButtonComponent
  ],
```

## 4、在tsconfig.app.json种加入编译

```
"include": [
    "src/**/*.d.ts",
    "node_modules/@hey_ff/testbutton/the-button/**/*.ts",
    "reuse/src/app/components/**/*.ts",
  ],
  "exclude": [
    "node_modules/@hey_ff/testbutton/the-button/**/*.spec.ts",
    "reuse/src/app/components/**/*.spec.ts"
  ]
```

# 四、子项目不发包，通过Url引用  

## 1、修改本项目的package.json
```
"btnUrl": "https://github.com/Heyff12/reuseBtn",
```

## 2、在app.module.ts引入

```
// import {TheButtonComponent} from '@hey_ff/testbutton/the-button/the-button.component'
// import {TheButtonComponent} from 'btn'
import {TheButtonComponent} from 'btnUrl'

@NgModule({
  declarations: [
    AppComponent,TheButtonComponent
  ],
```

## 4、在tsconfig.app.json种加入编译

```
"include": [
    "src/**/*.d.ts",
    "node_modules/@hey_ff/testbutton/the-button/**/*.ts",
    "reuse/src/app/components/**/*.ts",
    "node_modules/btnUrl/**/*.ts",
  ],
  "exclude": [
    "node_modules/@hey_ff/testbutton/the-button/**/*.spec.ts",
    "reuse/src/app/components/**/*.spec.ts",
    "node_modules/btnUrl/**/*.spec.ts",
  ]
```

# 五、子项目发布angular组件包

## 1、在子项目构建library配置，可以build、发布组件包

1.创建工作区

ng new xxxx --create-application=false  

xxxx为项目名

2.进入项目新建library

cd xxxx

ng g library my-lib --prefix=ml

3.编译
ng build my-lib --prod

4.编译后会生成dist文件，进入dist文件
cd dist
cd my-lib
5.打包

npm pack

6.发布
npm publish --access public

## 2、在父项目安装包，可以直接使用

```
import { MyLibModule } from '@hey_ff/my-lib';

@NgModule({
  declarations: [AppComponent, TheButtonComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule],
```

## 3、如果不方便发布到npm

1、可以把第一步的 打包好的文件 dist/my-lib push 到指定分支

```
git subtree push --prefix dist/my-lib origin reuse
```

2、在父项目 通过 指定分支路径 安装上面的打包好的文件 

```
"reuse": "git@github.com:Heyff12/angularPackage.git#reuse",
```

3、 正常使用

```
import { MyLibModule } from 'reuse';

@NgModule({
  declarations: [AppComponent, TheButtonComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule],
```

# 总结  

* 建一个新的git库，构建angular module，所有component都引入该module，则在使用的地方，引入一个module，即可使用所有的component
* 在父库，通过url引入
* 需要在父库，知道ts编译

## 优化 

* 对组件库进行build