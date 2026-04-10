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

#### Арга 1: VSCode ашиглах

1. VSCode нээх
2. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) дарж Command Palette нээх
3. `Git: Clone` гэж бичээд сонгох
4. `https://github.com/<ӨӨРИЙН_GITHUB_НЭРЭЭ>/ecommerce.git` хаягийг оруулах
5. Хадгалах фолдероо сонгох
6. "Open" дарж проектоо нээх

#### Арга 2: Terminal ашиглах

```bash
git clone https://github.com/<ӨӨРИЙН_GITHUB_НЭРЭЭ>/ecommerce.git
cd ecommerce
code .
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

#### VSCode-оос:

1. Зүүн талын **Source Control** (Ctrl+Shift+G) таб нээх
2. Өөрчлөгдсөн файлуудын хажууд байгаа **+** дарж stage хийх
3. Дээрх message хэсэгт `completed product store exercise` гэж бичих
4. **Commit** товч дарах
5. **Sync Changes** дарж push хийх

#### Terminal-аас:

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
