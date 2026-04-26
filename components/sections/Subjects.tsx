import { SUBJECTS, CURRICULA, SITE } from "@/lib/constants";

export default function Subjects() {
  return (
    <section id="subjects" style={{ background: "#f5f3ef", padding: "90px 5%", backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgODAwIDYwMCI+CiAgPHN0eWxlPgogICAgdGV4dCB7IGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAiVGltZXMgTmV3IFJvbWFuIiwgc2VyaWY7IGZpbGw6ICMxYTFmMWE7IGZpbGwtb3BhY2l0eTogMC4wNzsgfQogICAgLmVxIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXN0eWxlOiBpdGFsaWM7IH0KICAgIC5iaWcgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9CiAgICAuc20geyBmb250LXNpemU6IDExcHg7IH0KICAgIGxpbmUsIHBhdGgsIGNpcmNsZSwgZWxsaXBzZSwgcG9seWxpbmUsIHJlY3QgeyBzdHJva2U6ICMxYTFmMWE7IHN0cm9rZS1vcGFjaXR5OiAwLjA2OyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDEuMjsgfQogIDwvc3R5bGU+CgogIDwhLS0gUm93IDEgLS0+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIxMCIgeT0iMzAiPnjCsiArIDJ4ICsgMSA9IDA8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIyMTAiIHk9IjI1Ij7iiKsgZih4KSBkeCA9IEYoeCkgKyBDPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNDYwIiB5PSIzMiI+YcKyICsgYsKyID0gY8KyPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNjIwIiB5PSIyOCI+c2luwrLOuCArIGNvc8KyzrggPSAxPC90ZXh0PgoKICA8IS0tIEF4ZXMgLyBncmFwaCAtLT4KICA8bGluZSB4MT0iMTAiIHkxPSI4MCIgeDI9IjEwIiB5Mj0iNTAiLz4KICA8bGluZSB4MT0iMTAiIHkxPSI4MCIgeDI9IjQ1IiB5Mj0iODAiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxMiw3NSAyMCw2MCAyOCw2NSAzNiw1MiA0NCw1NSIvPgoKICA8IS0tIENpcmNsZSB3aXRoIHJhZGl1cyAtLT4KICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjY4IiByPSIxOCIvPgogIDxsaW5lIHgxPSI5MCIgeTE9IjY4IiB4Mj0iMTA4IiB5Mj0iNjgiLz4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjkzIiB5PSI2NSI+cjwvdGV4dD4KCiAgPCEtLSBUcmlhbmdsZSAtLT4KICA8cG9seWxpbmUgcG9pbnRzPSIxNjAsOTAgMTk1LDQ1IDIzMCw5MCAxNjAsOTAiLz4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjE2NSIgeT0iMTA0Ij5hPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iMjA4IiB5PSIxMDQiPmI8L3RleHQ+CiAgPHRleHQgY2xhc3M9InNtIiB4PSIxODgiIHk9IjQyIj5jPC90ZXh0PgoKICA8dGV4dCBjbGFzcz0iZXEiIHg9IjI1MCIgeT0iNzAiPnkgPSBteCArIGM8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIzODAiIHk9IjU4Ij7OlCA9IGLCsiAtIDRhYzwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjU0MCIgeT0iNzIiPmxpbSBmKHgpID0gTDwvdGV4dD4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjU0MSIgeT0iODIiPnjihpLiiJ48L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI2NjAiIHk9IjYwIj5FID0gbWPCsjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9Ijc0MCIgeT0iNzUiPkYgPSBtYTwvdGV4dD4KCiAgPCEtLSBSb3cgMiAtLT4KICA8dGV4dCBjbGFzcz0iYmlnIiB4PSIxMCIgeT0iMTQwIj7iiJE8L3RleHQ+CiAgPHRleHQgY2xhc3M9InNtIiB4PSI4IiB5PSIxNTIiPm49MTwvdGV4dD4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjEyIiB5PSIxMjgiPuKInjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjM1IiB5PSIxNDAiPjEvbsKyPC90ZXh0PgoKICA8IS0tIEludGVncmFsIHN5bWJvbCAtLT4KICA8dGV4dCBjbGFzcz0iYmlnIiB4PSI4NSIgeT0iMTQ1Ij7iiKs8L3RleHQ+CiAgPHRleHQgY2xhc3M9InNtIiB4PSI4MyIgeT0iMTU1Ij4wPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iOTAiIHk9IjEyOCI+z4A8L3RleHQ+CgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iMTEwIiB5PSIxMzgiPnjCsiA9IC1iIMKxIOKImihiwrItNGFjKTwvdGV4dD4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjE1MCIgeT0iMTQ4Ij4gICAgICAgIDJhPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iMzUwIiB5PSIxMzIiPmR5L2R4ID0gbnjigb/igbvCuTwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjUxMCIgeT0iMTQ1Ij50YW4gzrggPSBzaW4gzrggLyBjb3Mgzrg8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI3MDAiIHk9IjEzOCI+diA9IHUgKyBhdDwvdGV4dD4KCiAgPCEtLSBDb29yZGluYXRlIHBsYW5lIHNtYWxsIC0tPgogIDxsaW5lIHgxPSIxMCIgeTE9IjIwMCIgeDI9IjEwIiB5Mj0iMTY1Ii8+CiAgPGxpbmUgeDE9IjEwIiB5MT0iMjAwIiB4Mj0iNTUiIHkyPSIyMDAiLz4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjU2IiB5PSIyMDIiPng8L3RleHQ+CiAgPHRleHQgY2xhc3M9InNtIiB4PSI1IiB5PSIxNjIiPnk8L3RleHQ+CiAgPCEtLSBQYXJhYm9sYS1saWtlIGN1cnZlIC0tPgogIDxwYXRoIGQ9Ik0xMiwyMDAgUTMyLDE3MCA1MiwyMDAiLz4KCiAgPHRleHQgY2xhc3M9ImVxIiB4PSI2NSIgeT0iMTg1Ij5QKEF8QikgPSBQKEHiiKlCKSAvIFAoQik8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIzMTAiIHk9IjE3OCI+4oiHwrLPhiA9IDA8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI0MDAiIHk9IjE5MiI+bG9n4oKCKDgpID0gMzwvdGV4dD4KCiAgPCEtLSBSaWdodCBhbmdsZSBib3ggLS0+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDkwLDE5NSA0OTAsMTc1IDUxMCwxNzUiLz4KICA8cmVjdCB4PSI0OTAiIHk9IjE4NSIgd2lkdGg9IjciIGhlaWdodD0iNyIvPgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iNDkyIiB5PSIyMTAiPjkwwrA8L3RleHQ+CgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNTMwIiB5PSIxODUiPkEgPSDPgHLCsjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjY0MCIgeT0iMTc4Ij5WID0gbHdoPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNzMwIiB5PSIxOTIiPm4hID0gbihuLTEpITwvdGV4dD4KCiAgPCEtLSBSb3cgMyAtLT4KICA8IS0tIDNEIGN1YmUgd2lyZWZyYW1lIC0tPgogIDxwb2x5bGluZSBwb2ludHM9IjIwLDI4MCA1MCwyODAgNTAsMjUwIDIwLDI1MCAyMCwyODAiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMCwyNzAgNjAsMjcwIDYwLDI0MCAzMCwyNDAgMzAsMjcwIi8+CiAgPGxpbmUgeDE9IjIwIiB5MT0iMjgwIiB4Mj0iMzAiIHkyPSIyNzAiLz4KICA8bGluZSB4MT0iNTAiIHkxPSIyODAiIHgyPSI2MCIgeTI9IjI3MCIvPgogIDxsaW5lIHgxPSI1MCIgeTE9IjI1MCIgeDI9IjYwIiB5Mj0iMjQwIi8+CiAgPGxpbmUgeDE9IjIwIiB5MT0iMjUwIiB4Mj0iMzAiIHkyPSIyNDAiLz4KCiAgPHRleHQgY2xhc3M9ImVxIiB4PSI3NSIgeT0iMjU4Ij7PgyA9IOKImijOoyh4Lc68KcKyL24pPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iMzAwIiB5PSIyNjUiPmVeKGnPgCkgKyAxID0gMDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjQ2MCIgeT0iMjU1Ij5zID0gwr1hdMKyPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNTcwIiB5PSIyNjgiPihhK2IpwrIgPSBhwrIrMmFiK2LCsjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjczMCIgeT0iMjU4Ij5RID0gbWPOlFQ8L3RleHQ+CgogIDwhLS0gU2luZSB3YXZlIC0tPgogIDxwYXRoIGQ9Ik0xMCwzMjAgQzIwLDMwNSAzMCwzMDUgNDAsMzIwIEM1MCwzMzUgNjAsMzM1IDcwLDMyMCBDODAsMzA1IDkwLDMwNSAxMDAsMzIwIi8+CiAgPHRleHQgY2xhc3M9InNtIiB4PSIzNSIgeT0iMzQwIj5zaW4oeCk8L3RleHQ+CgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iMTE1IiB5PSIzMTUiPmYnKHgpID0gbGltW2YoeCtoKS1mKHgpXS9oPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iMTkwIiB5PSIzMjUiPiAgICAgIGjihpIwPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNDAwIiB5PSIzMTgiPjLPgHI8L3RleHQ+CgogIDwhLS0gQ2lyY2xlIHNlY3RvcnMgLS0+CiAgPGNpcmNsZSBjeD0iNDUwIiBjeT0iMzQwIiByPSIyMiIvPgogIDxsaW5lIHgxPSI0NTAiIHkxPSIzNDAiIHgyPSI0NzIiIHkyPSIzNDAiLz4KICA8bGluZSB4MT0iNDUwIiB5MT0iMzQwIiB4Mj0iNDYxIiB5Mj0iMzE4Ii8+CgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNDkwIiB5PSIzMjUiPs68ID0gzqN4L248L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI2MDAiIHk9IjMxOCI+cCA9IG12PC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNjgwIiB5PSIzMjgiPlcgPSBGZDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9Ijc1MCIgeT0iMzE1Ij5QID0gSVY8L3RleHQ+CgogIDwhLS0gUm93IDQgLS0+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIxMCIgeT0iMzkwIj5WID0gSVI8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI4MCIgeT0iMzgyIj7iiJooeMKyICsgecKyKSA9IHI8L3RleHQ+CgogIDwhLS0gTWF0cml4IGJyYWNrZXRzIC0tPgogIDx0ZXh0IHN0eWxlPSJmb250LXNpemU6NDBweDsgZmlsbDojMWExZjFhOyBmaWxsLW9wYWNpdHk6MC4wNjsgZm9udC1mYW1pbHk6c2VyaWY7IiB4PSIyMzAiIHk9IjQwMCI+WzwvdGV4dD4KICA8dGV4dCBjbGFzcz0ic20iIHg9IjI0NSIgeT0iMzg4Ij5hICBiPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iMjQ1IiB5PSI0MDAiPmMgIGQ8L3RleHQ+CiAgPHRleHQgc3R5bGU9ImZvbnQtc2l6ZTo0MHB4OyBmaWxsOiMxYTFmMWE7IGZpbGwtb3BhY2l0eTowLjA2OyBmb250LWZhbWlseTpzZXJpZjsiIHg9IjI3MiIgeT0iNDAwIj5dPC90ZXh0PgoKICA8dGV4dCBjbGFzcz0iZXEiIHg9IjMwMCIgeT0iMzg1Ij5kZXQoQSkgPSBhZCAtIGJjPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNDkwIiB5PSIzOTAiPuKIgmYv4oiCeCA9IDA8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI2MDAiIHk9IjM4MiI+bihuKzEpLzI8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI3MTAiIHk9IjM5NSI+SCA9IC3Oo3DCt2xvZyhwKTwvdGV4dD4KCiAgPCEtLSBDb29yZGluYXRlIHBsYW5lIC0tPgogIDxsaW5lIHgxPSIxMCIgeTE9IjQ2MCIgeDI9IjEwIiB5Mj0iNDIwIi8+CiAgPGxpbmUgeDE9IjEwIiB5MT0iNDYwIiB4Mj0iNjAiIHkyPSI0NjAiLz4KICA8IS0tIExpbmVhciBncmFwaCBsaW5lIC0tPgogIDxsaW5lIHgxPSIxMCIgeTE9IjQ1NSIgeDI9IjYwIiB5Mj0iNDMwIi8+CgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNzAiIHk9IjQ0NSI+eSA9IGF4wrIgKyBieCArIGM8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIyODAiIHk9IjQzOCI+Y29zKDLOuCkgPSAxIC0gMnNpbsKyzrg8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI1MDAiIHk9IjQ0NSI+QyA9IDLPgHI8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI2MDAiIHk9IjQzOCI+dsKyID0gdcKyICsgMmFzPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNzMwIiB5PSI0NDgiPktFID0gwr1tdsKyPC90ZXh0PgoKICA8IS0tIFJvdyA1IC0tPgogIDwhLS0gUmlnaHQgdHJpYW5nbGUgd2l0aCBsYWJlbHMgLS0+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTAsNTQwIDYwLDU0MCAxMCw1MDAgMTAsNTQwIi8+CiAgPHJlY3QgeD0iMTAiIHk9IjUzMCIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iMzAiIHk9IjU1MiI+YWRqPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iMCIgeT0iNTIyIj5vcHA8L3RleHQ+CgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNzUiIHk9IjUyNSI+zqMgYeG1omLhtaIg4omkIOKImijOo2HhtaLCsinCt+KImijOo2LhtaLCsik8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSIzNzAiIHk9IjUxOCI+z4YgPSAoMSviiJo1KS8yPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJlcSIgeD0iNTQwIiB5PSI1MjgiPuKInjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjU4MCIgeT0iNTIwIj544oG/L24hID0gZcujPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iNTU1IiB5PSI1MzAiPs6jPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJzbSIgeD0iNTUzIiB5PSI1NDAiPm49MDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjY5MCIgeT0iNTI1Ij5HID0gNi42NzTDlzEw4oG7wrnCuTwvdGV4dD4KCiAgPHRleHQgY2xhc3M9ImVxIiB4PSIxMCIgeT0iNTkwIj4oeC1oKcKyICsgKHktaynCsiA9IHLCsjwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjI1MCIgeT0iNTgyIj7iiIfCt0UgPSDPgS/OteKCgDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjQwMCIgeT0iNTkyIj5BQiA9IHxBfHxCfGNvcyDOuDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iZXEiIHg9IjYwMCIgeT0iNTg1Ij7OuyA9IGgvbXY8L3RleHQ+CiAgPHRleHQgY2xhc3M9ImVxIiB4PSI3MTAiIHk9IjU5MiI+RWsgPSDCvUnPicKyPC90ZXh0Pgo8L3N2Zz4=")'}}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--green-light)", marginBottom: 14 }}>
          What we cover
        </p>
        <h2 style={{ fontFamily: '"Merriweather", serif', fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 900, color: "var(--text-dark)", lineHeight: 1.18, marginBottom: 14, letterSpacing: "-0.3px" }}>
          Tutoring Services. Grades 5–12
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: 28 }}>
          Focused, expert tuition across core subjects.
        </p>

        {/* Curricula badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {CURRICULA.map((c) => (
            <span
              key={c}
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "5px 14px",
                borderRadius: 4,
                background: "rgba(26,107,40,0.08)",
                color: "var(--green)",
                border: "1px solid rgba(26,107,40,0.2)",
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Subject cards */}
        <div className="subjects-grid">
          {SUBJECTS.map((subject) => {
            const isMore = "isMore" in subject && subject.isMore;

            return (
              <div
                key={subject.name}
                style={{
                  background: subject.featured
                    ? "var(--text-dark)"
                    : isMore
                    ? "transparent"
                    : "#ffffff",
                  border: subject.featured
                    ? "none"
                    : isMore
                    ? "2px dashed var(--border-strong)"
                    : "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  transition: "border-color .2s, box-shadow .2s",
                  gridColumn: subject.featured ? "span 2" : "span 1",
                }}
                className={subject.featured ? "scard-featured" : ""}
              >
                <span style={{ fontSize: 24 }}>{subject.icon}</span>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: subject.featured ? "#fff" : isMore ? "var(--text-muted)" : "var(--text-dark)",
                    marginBottom: 2,
                  }}
                >
                  {subject.name}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: subject.featured ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {subject.desc}
                </p>
                {subject.grade && (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      background: "var(--off-white)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      padding: "3px 10px",
                      alignSelf: "flex-start",
                      marginTop: 4,
                    }}
                  >
                    {subject.grade}
                  </span>
                )}
                {isMore && (
                  <a
                    href="#location"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--green)",
                      textDecoration: "none",
                      marginTop: 4,
                    }}
                  >
                    Enquire now →
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div
          style={{
            marginTop: 48,
            background: "var(--white)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "32px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontFamily: '"Merriweather", serif', fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, color: "var(--text-dark)", marginBottom: 6 }}>
              Not sure which subject you need?
            </p>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
              Call us and we&apos;ll help you find the right fit.
            </p>
          </div>
          <a
            href={`tel:${SITE.phone}`}
            style={{
              background: "var(--green)",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 6,
              fontSize: 14.5,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              boxShadow: "0 4px 16px rgba(26,107,40,0.2)",
            }}
          >
            {SITE.phoneDisplay}
          </a>
        </div> */}
      </div>

      <style>{`
        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .scard-featured {
          grid-column: span 2 !important;
        }
        @media (max-width: 960px) {
          .subjects-grid { grid-template-columns: repeat(2, 1fr); }
          .scard-featured { grid-column: span 2 !important; }
        }
        @media (max-width: 640px) {
          .subjects-grid { grid-template-columns: 1fr; }
          .scard-featured { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
