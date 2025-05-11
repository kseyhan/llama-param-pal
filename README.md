# 🦙 Llama ParamPal — LLM Parameters Repository

**Llama ParamPal** — a community-driven digest to help you find the optimal recommended model parameters for running local LLMs using [`llama.cpp`](https://github.com/ggml-org/llama.cpp).


## 📦 What is this?

Finding the recommended sampling parameters to run llms can sometimes be a cumbersome and time-consuming process. This project aims to make this whole process a little bit easier to:

- Avoid guesswork when running llms.
- Contribute references and links to the models recommended parameter documentations.

The project consists of the `models.json` file that serves as the source of knowledge and a frontend that is available under [https://llama-parampal.codecut.de/](https://llama-parampal.codecut.de/) which can be used to quickly search for models in this json.

---

## ✍️ How to Contribute

1. **Fork this repo**
2. Open the `models.json` file
3. Add your model or a profile under an existing one
4. Include:
   - A descriptive name for the profile
   - the llama.cpp CLI parameters
   - At least one valid reference to a documentation of the model creators where those settings are documented.
5. Validate the JSON:
   ```
   cd validation
   npm install
   npm run validate
   ```
6. **Submit a Pull Request** - we'll review and merge!

💡 Make sure your JSON is valid and follows the existing structure. When in doubt, use current entries as examples.

---

## 💬 Questions or Ideas?

Open an issue or join the discussion at [https://github.com/kseyhan/llama-param-pal](https://github.com/kseyhan/llama-param-pal).

---

## 🧪 Related Projects

- [`llama.cpp`](https://github.com/ggml-org/llama.cpp): An Llm inference engine in pure C/C++

---

## 🪄 License

MIT — free to use, improve, and share.