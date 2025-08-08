type Props = { date: Date };

export default function FormattedDate({ date }: Props) {
  const label = date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return label;
}
