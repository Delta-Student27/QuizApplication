import { useLocation } from "react-router-dom";
import Result from "../components/Result";

export default function ResultPage() {
  const location = useLocation();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  return <Result score={score} total={total} />;
}