import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Enabridge — Build, Teach, Consult with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 0%, rgba(180, 190, 254, 0.18), transparent 40%), radial-gradient(circle at 90% 10%, rgba(148, 226, 213, 0.14), transparent 35%), #11111b",
          color: "#f5f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#94e2d5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#11111b",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#f5e0dc",
              fontWeight: 600,
            }}
          >
            Enabridge
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#f2cdcd",
              fontWeight: 500,
            }}
          >
            Build · Teach · Consult
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f5f7fb",
              maxWidth: 1000,
            }}
          >
            Ship software with AI. Train teams on AI. Build our own AI product.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #313244",
            paddingTop: 24,
            color: "#a6adc8",
            fontSize: 22,
          }}
        >
          <div>Bangkok, Thailand</div>
          <div style={{ color: "#b4befe" }}>enabridge.ai</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
