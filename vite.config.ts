import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { getHttpsServerOptions } from "office-addin-dev-certs";
import type { ServerOptions as HttpsServerOptions } from "https";

async function getHttpsOptions(): Promise<HttpsServerOptions | undefined> {
  try {
    const httpsOptions = await getHttpsServerOptions();
    return { ca: httpsOptions.ca, key: httpsOptions.key, cert: httpsOptions.cert };
  } catch (err) {
    console.error("Error getting HTTPS options:", err);
    return undefined;
  }
}

const port = parseInt(process.env.npm_package_config_dev_server_port || "3000", 10);

export default defineConfig(async () => {
  const httpsOptions = await getHttpsOptions();

  return {
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: "manifest.xml",
            dest: "",
          },
          {
            src: "manifest.prod.xml",
            dest: "",
          },
        ],
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          taskpane: "./taskpane.html",
        },
      },
      sourcemap: true,
    },
    server: {
      port: port,
      host: "127.0.0.1",
      https: httpsOptions,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  };
});
