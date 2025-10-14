import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface WeekData {
  week: string;
  lessons: number;
  individualWork: number;
}

const StudentProgress = () => {
  const { t } = useLanguage();
  const [weeklyData, setWeeklyData] = useState<WeekData[]>([]);
  const [minutes, setMinutes] = useState<number>(0);
  const [selectedWeek, setSelectedWeek] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("studentProgressData");
    if (saved) {
      setWeeklyData(JSON.parse(saved));
    } else {
      // Initialize with current month's weeks
      const initialData = generateInitialWeeks();
      setWeeklyData(initialData);
      localStorage.setItem("studentProgressData", JSON.stringify(initialData));
    }
  }, []);

  const generateInitialWeeks = (): WeekData[] => {
    const weeks: WeekData[] = [];
    const today = new Date();
    
    // Generate last 8 weeks
    for (let i = 7; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i * 7);
      const weekLabel = formatWeekLabel(date);
      weeks.push({
        week: weekLabel,
        lessons: Math.floor(Math.random() * 120), // Demo data
        individualWork: 0,
      });
    }
    return weeks;
  };

  const formatWeekLabel = (date: Date): string => {
    const month = date.toLocaleDateString(t("progress.locale"), { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  const addMinutes = () => {
    if (!selectedWeek || minutes <= 0) return;

    const updatedData = weeklyData.map((week) =>
      week.week === selectedWeek
        ? { ...week, individualWork: week.individualWork + minutes }
        : week
    );
    setWeeklyData(updatedData);
    localStorage.setItem("studentProgressData", JSON.stringify(updatedData));
    setMinutes(0);
  };

  const formatYAxis = (value: number): string => {
    if (value < 60) return `${value}min`;
    const hours = value / 60;
    return `${hours}h`;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const total = payload[0].payload.lessons + payload[0].payload.individualWork;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-md">
          <p className="font-semibold mb-2">{payload[0].payload.week}</p>
          <p className="text-sm text-primary">
            {t("progress.lessons")}: {payload[0].payload.lessons} min
          </p>
          <p className="text-sm text-accent-foreground">
            {t("progress.individualWork")}: {payload[0].payload.individualWork} min
          </p>
          <p className="text-sm font-semibold mt-1 border-t border-border pt-1">
            {t("progress.total")}: {total} min ({(total / 60).toFixed(1)}h)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="progress" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("progress.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("progress.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Add Minutes Form */}
          <Card className="p-6 fade-in">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {t("progress.logWork")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <Label htmlFor="week-select">{t("progress.selectWeek")}</Label>
                <select
                  id="week-select"
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">{t("progress.chooseWeek")}</option>
                  {weeklyData.map((week) => (
                    <option key={week.week} value={week.week}>
                      {week.week}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="minutes-input">{t("progress.minutes")}</Label>
                <Input
                  id="minutes-input"
                  type="number"
                  min="0"
                  step="5"
                  value={minutes || ""}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  placeholder="0"
                />
              </div>
              <Button onClick={addMinutes} className="w-full md:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                {t("progress.addMinutes")}
              </Button>
            </div>
          </Card>

          {/* Chart */}
          <Card className="p-6 fade-in">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {t("progress.weeklyProgress")}
            </h3>
            <div className="w-full h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis
                    dataKey="week"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--foreground))" }}
                  />
                  <YAxis
                    tickFormatter={formatYAxis}
                    ticks={[0, 30, 60, 90, 120, 150, 180]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--foreground))" }}
                    label={{
                      value: t("progress.timeSpent"),
                      angle: -90,
                      position: "insideLeft",
                      fill: "hsl(var(--foreground))",
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="lessons"
                    stackId="a"
                    fill="hsl(215 100% 40%)"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="individualWork"
                    stackId="a"
                    fill="hsl(45 100% 50%)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-6 justify-center mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(215 100% 40%)" }} />
                <span className="text-sm text-muted-foreground">{t("progress.lessons")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(45 100% 50%)" }} />
                <span className="text-sm text-muted-foreground">{t("progress.individualWork")}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudentProgress;
