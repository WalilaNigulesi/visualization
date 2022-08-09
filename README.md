#  可视化
### 1.数据处理
- ship1 是原始数据，使用 demo2.py 处理后生成 ship_new.csv
- tran.py 将csv 格式化为json 
- data.js 声明了 data 的内容，在 demo.html 中引用

### 2. HTML部分
- `<style></style>`里规定了容器的大小
- `<script></script>`内使用了两个外界js

### 3.Javascript部分
 option内先给出总体框架，再使用
 ```javascript
 option.baseOption.timeline.data.push(data.timeline[n]);
 ```
等函数注入具体数据

细节部分阅读[官方文档](https://echarts.apache.org/zh/api.html#echarts)

## Github使用
 - 在本地安装Git
 - 搜索Continy/virtualization Fork一下
 - 或者使用Vscode、GitHub Desktop克隆这个项目 
 ![image.png](https://s2.loli.net/2022/08/08/6tEdBrOxwDkncfQ.png)

- 这张图片是通过 [sm.ms](https://sm.ms) 生成的



