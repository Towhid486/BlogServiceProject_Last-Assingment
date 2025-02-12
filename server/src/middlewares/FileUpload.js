import multer from 'multer'

const fileStorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, "api-img" + Date.now() )
      }
})

const upload = multer({ storage: fileStorageEngine })

export default upload;