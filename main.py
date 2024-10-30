from flask import Flask, render_template

app=Flask(__name__)


@app.route("/")
def index():
    image_list=["https://q2.itc.cn/images01/20240907/a7b03d6dbc184b08ab94507985123656.jpeg","https://p1.itc.cn/images01/20230917/87578a0f18e2492da738c6032f453828.jpeg",
                "https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/pc_aigc.png","https://p1.itc.cn/images01/20230917/87578a0f18e2492da738c6032f453828.jpeg"]
    want_list = [{"image":"https://img1.baidu.com/it/u=1315608916,1545485417&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1144","title":"原始生活21天","subtitle":"原始生活 "},{"image":"https://img2.baidu.com/it/u=3838500101,167538789&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=644","title":"原始生活21天","subtitle":"原始生活 "},{"image":"https://q7.itc.cn/images01/20241022/39461d9c78a94a1280a23bda0b88bc76.jpeg","title":"原始生活21天","subtitle":"原始生活 "}]
    hot_list = [{"image": "https://q9.itc.cn/images01/20241023/103dfe0aeb9a475088b9272fa6c83f8e.png", "title": "生存技能",
                "subtitle": "原始生活 "},
               {"image": "https://img2.baidu.com/it/u=2887392405,457222720&fm=253&fmt=auto&app=120&f=JPEG?w=882&h=500",
                "title": "原始生活21天", "subtitle": "原始生活 "},
               {"image": "https://q7.itc.cn/images01/20241022/39461d9c78a94a1280a23bda0b88bc76.jpeg",
                "title": "原始生活21天",
                "subtitle": "原始生活 "}]
    return render_template("index.html",want_list=want_list,hot_list=hot_list,image_list=image_list)




if __name__ == '__main__':
    app.run(host="127.0.0.1",port=5000,debug=True)