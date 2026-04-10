# Product Store - Дасгалын апп

React hooks, TypeScript, компонент задлах дадлага хийх зориулалттай дасгалын апп.

## Эхлэхээс өмнө

- [Node.js](https://nodejs.org) суулгасан байх (v18+)
- GitHub аккаунттай байх
- Git суулгасан байх

## Fork хийх заавар

### 1. GitHub дээр Fork хийх

- Энэ repo-н GitHub хуудас руу ороод баруун дээд буланд байгаа **Fork** товчийг дарна
- "Create a new fork" хуудас нээгдэнэ
- Repository name хэвээр үлдээж болно
- **Create fork** дарна

### 2. Өөрийн Fork-г клон хийх

```bash
git clone https://github.com/<ӨӨРИЙН_GITHUB_НЭРЭЭ>/ecommerce.git
cd ecommerce
```

### 3. Dependency суулгах

```bash
npm install
```

### 4. Dev server ажиллуулах

```bash
npm run dev
```

Хөтөч дээр [http://localhost:3000](http://localhost:3000) нээнэ. TypeScript алдаатай тул хуудас ачаалахгүй — энэ нь хэвийн зүйл!

### 5. Даалгавраа эхлэх

`TODO.md` файлыг нээж даалгавруудыг дарааллаар нь хийнэ. Бүх код `app/page.tsx` файл дотор.

### 6. Ажлаа хадгалах

```bash
git add .
git commit -m "completed product store exercise"
git push origin main
```

## Файлын бүтэц

```
app/
├── page.tsx        <- Бүх ажлаа энд хийнэ
├── layout.tsx      <- Хүрэх шаардлагагүй
└── globals.css     <- Хүрэх шаардлагагүй
TODO.md             <- Даалгаврын жагсаалт (монголоор)
```

## Тусламж хэрэгтэй бол

- API-г шалгах: https://dummyjson.com/products хаягийг хөтөч дээр нээж хариуг харна
- TypeScript алдааг терминал дээрээс уншина
- `TODO.md` дахь дарааллыг баримтлана
