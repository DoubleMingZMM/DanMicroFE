# 使用手册

## 对外提供的接口
目前支持这几种接口类型，后期加上 theme、component 这两种。
+ type：

- spin：

+ rorate：

- title：

+ className：

- style：

+ onClick：

## 需要改进的方案
我们可以使用 SVG 图标替换 font 图标，从而可以带来了以下优势：
+ 完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。

- 在低端设备上 SVG 有更好的清晰度。

+ 支持多色图标。

- 对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。