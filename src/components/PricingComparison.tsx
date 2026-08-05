import { Check, Minus, Clock } from "lucide-react";

type Cell = true | false | "roadmap";

const columns = ["Design Partner", "Founding", "Professional", "Enterprise"];

const rows: { feature: string; values: Cell[] }[] = [
  { feature: "Dashboard Lean", values: [true, true, true, true] },
  { feature: "Yamazumi", values: [true, true, true, true] },
  { feature: "Work Combination Table", values: [true, true, true, true] },
  { feature: "Work Instructions", values: [true, true, true, true] },
  { feature: "IA para recomendaciones", values: [true, true, true, true] },
  { feature: "Benchmark entre líneas", values: [false, false, true, true] },
  { feature: "Exportación PDF", values: [true, true, true, true] },
  { feature: "Exportación Excel", values: [false, true, true, true] },
  { feature: "API", values: ["roadmap", "roadmap", "roadmap", "roadmap"] },
  { feature: "ERP / MES", values: ["roadmap", "roadmap", "roadmap", "roadmap"] },
  { feature: "Computer Vision automático", values: ["roadmap", "roadmap", "roadmap", "roadmap"] },
];

const CellValue = ({ value }: { value: Cell }) => {
  if (value === "roadmap") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
        <Clock className="h-3 w-3" aria-hidden="true" />
        Roadmap
      </span>
    );
  }
  return value ? (
    <>
      <Check className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
      <span className="sr-only">Incluido</span>
    </>
  ) : (
    <>
      <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" aria-hidden="true" />
      <span className="sr-only">No incluido</span>
    </>
  );
};

const PricingComparison = () => {
  return (
    <section className="container mx-auto px-6 py-24" aria-labelledby="comparar-funcionalidades">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Detalle
        </span>
        <h2
          id="comparar-funcionalidades"
          className="mt-4 font-heading text-3xl font-bold md:text-4xl"
        >
          Comparar funcionalidades
        </h2>
        <p className="mt-4 text-muted-foreground">
          Transparencia total: mostramos únicamente lo que ya está disponible hoy. Lo que está en
          desarrollo aparece marcado como Roadmap.
        </p>
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <caption className="sr-only">
              Comparación de funcionalidades por plan de Be Kaizen
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="px-6 py-5 text-left font-heading text-base font-semibold">
                  Funcionalidad
                </th>
                {columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="px-4 py-5 text-center font-heading text-base font-semibold"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40"
                >
                  <th scope="row" className="px-6 py-4 text-left font-medium text-foreground">
                    {row.feature}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={columns[i]} className="px-4 py-4 text-center">
                      <CellValue value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
