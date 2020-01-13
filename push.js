var client = require("scp2")
client.scp(
  "./public",
  {
    host: "154.202.60.246",
    username: "root",
    password: "u}A$mZm~/K+FRm2I",
    path: "/www/wwwroot/blog/ggbengBlog"
  },
  function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("上传成功")
    }
  }
)
