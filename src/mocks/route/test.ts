import express from 'express';

import { CategoryModel } from '@/query/test/useGetCategory';

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/certificate/category', (req, res) => {
  const data: CategoryModel[] = Array.from({ length: 20 }, (_, mainIndex) => ({
    id: mainIndex,
    title: `대분류${mainIndex}`,
    subCategory: Array.from({ length: 5 }, (_, subIndex) => ({
      id: subIndex,
      title: `중분류${mainIndex}-${subIndex}`,
    })),
  }));

  res.json(data);

  // setTimeout(() => res.json(data), 3000);
});

router.post('/posts', (req, res) => {
  console.log(req.body); // Log the JSON payload received
  res.status(201).send({ message: req.body });
});

export default router;
