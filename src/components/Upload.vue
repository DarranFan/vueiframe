<template>
  <div>
    <label for="fileImg1" class="choose-file">
      点击更换
    </label>
    <input type="file" id="fileImg1" name="file" @change="handleFileChange" ref="inputer" accept="image/jpeg,image/jpg,image/png" style="visibility: hidden;width:0">
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      aa: "你好"
    };
  },
  methods: {
    handleFileChange(v) {
      let files = v.target.files || v.dataTransfer.files;
      console.log(files);
      this.fileSize = files[0].size / 1024;
      console.log(this.fileSize);
      if (this.fileSize > 200) {
        this.$message.error("上传图片不能大于200KB!");
        return false;
      }
      if (!files.length) return;
      this.picValue = files[0];
      this.fileType = files[0].type;
      this.imgName = files[0].name;
      const isJPG =
        this.fileType === "image/jpeg" ||
        this.fileType === "image/jpg" ||
        this.fileType === "image/png";
      if (!isJPG) {
        this.$message.error("上传图片格式不正确!");
        return false;
      }
      this.imgPreview(this.picValue);
    },
    // 把上传上来的图片发送到服务器
    imgPreview(file) {
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        let reader = new FileReader();
        // 读取图片流
        reader.readAsDataURL(file);
        let self = this;
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image()
          img.src = result  //如果没有这句下面的img.onload 不执行
          img.onload = function() {
            let blob = self.compressImage(img, self.fileSize, 500);
            if (!blob) {
              return false;
            }
            self.loadingImg = true;
            let formData = new FormData();
            formData.append("file", blob, self.imgName);
            // getImageUpload(formData).then(msg => {
            //   if (msg.data.errCode === 0) {
            //     self.editForm.categoryUrl = msg.data.data.url;
            //     self.editForm.categoryUrlModify = addSuffix(
            //       msg.data.data.url,
            //       56,
            //       56
            //     );
            //     // self.brandUrlTip = falser
            //     self.loadingImg = false;
            //   } else {
            //     self.loadingImg = false;
            //   }
            // });
            let url = '/image/upload'
            let header = { 'Content-Type': 'multipart/form-data' }
            self.$http.post(url,formData).then(res=>{
              console.log(url,formData)
              console.log(res)
            })
          };
        };
      }
    },
    // 压缩上传图片方法

    // 图片压缩 注意图片上传时的大小限制
    compressImage(img, imgSize, bastSize) {
      /**
       * @date: 2018-10-13
       * @ 1, img--图片
       * @ 2, imgSize -- 图片大小 kb
       * @ 3, basetSize -- 上传限制的最大size kb
       */
      let rate = 0.92;
      if (imgSize >= bastSize) {
        // 如果图片现在大小大于所要求的图片上传大小
        let n = imgSize / bastSize;
        if (n <= 2) {
          rate = 0.7;
        } else if (n > 2 && n <= 3) {
          rate = 0.2;
        } else {
          rate = 0.1;
        }
      }
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      // let initSize = img.src.length
      let width = img.width;
      let height = img.height;
      // let flag = (width >= height * 1.4 && width <= height * 2.5)
      // if (!flag) {
      //     this.$message.error('您上传的图片比例不正确')
      //     return false
      // }
      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = "#fff";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      let n = canvas.toDataURL("image/jpeg", rate);
      let blob = this.dataURItoBlob(n);
      return blob;
    },
    dataURItoBlob(base) {
      let byteString;
      if (base.split(",")[0].indexOf("base64") >= 0) {
        byteString = atob(base.split(",")[1]);
      } else {
        byteString = unescape(base.split(",")[1]);
      }
      let mimeString = base
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
      let ia = new Uint8Array(byteString.length);
      for (let i = 0, len = byteString.length; i < len; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    }
  }
};
</script>
