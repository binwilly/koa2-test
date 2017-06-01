import Router from 'koa-router';
import multer from 'koa-multer';
import multerS3 from 'multer-s3';
import { S3 } from 'aws-sdk';
import config from '../config';

const S3Config = {
  accessKeyId: config.aws.s3.accessKey,
  secretAccessKey: config.aws.s3.secretKey,
  region: config.aws.s3.region
};
const s3 = new S3(S3Config);

const upload = multer({
  storage: multerS3({
    s3,
    bucket: config.aws.s3.bucket,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    }
  })
});

const router = new Router();

router.post('/upload', upload.single('photo'), async (ctx) => {
  if (ctx.request.type === 'multipart/form-data') {
    ctx.disableBodyParser = true;
  }
  ctx.body = JSON.stringify({ url: ctx.req.file.location });
  ctx.status = 200;
});

const routes = router.routes();

export default () => routes;
