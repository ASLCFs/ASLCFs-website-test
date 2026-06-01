排放清单上传与网页下载接入说明

1. 将需要提供给用户下载的文件放入 assets/downloads/ 目录。
2. 推荐文件格式：CSV、XLSX、PDF、ZIP。
3. 打开网站根目录下的 script.js。
4. 找到 const downloads = { ... } 配置。
5. 新增一个条目，填写 title、description、link。
6. link 示例：
   assets/downloads/your_inventory_2026.xlsx
7. 保存后刷新 downloads.html，页面会自动显示新的下载卡片。

推荐命名方式：
- emission_inventory_nanjing_2026.xlsx
- pm25_source_list_q1_2026.csv
- inventory_metadata_v1.pdf

如果后续需要“管理员在网页上直接上传文件”，再为 backend 增加上传接口即可。
