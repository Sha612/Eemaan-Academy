//Use it for:
// app name
// role labels
// static configs
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  MinusCircle,
  Save,
  Users,
  XCircle,
} from "lucide-react"

export const APP_NAME = "Eemaan Foundation"

export const classes = [
  {
    id: "1",
    name: "Fiqh 1",
    subject: "Fiqh",
    level: "Level 1",
    primaryTeacher: "Ahmed Teacher",
    studentsCount: 12,
    schedule: "Monday 10:00 - 11:00",
    status: "Active",
  },
  {
    id: "2",
    name: "Hifz 1",
    subject: "Hifz",
    level: "Level 1",
    primaryTeacher: "Fatima Teacher",
    studentsCount: 8,
    schedule: "Tuesday 14:00 - 15:00",
    status: "Active",
  },
  {
    id: "3",
    name: "Hadeeth 1",
    subject: "Hadeeth",
    level: "Level 1",
    primaryTeacher: "Umar Teacher",
    studentsCount: 10,
    schedule: "Thursday 16:00 - 17:00",
    status: "Active",
  },
]

export const replacements = [
  {
    id: "1",
    replacementTeacher: "Umar Teacher",
    primaryTeacher: "Ahmed Teacher",
    className: "Fiqh 1",
    startDate: "2026-05-12",
    startTime: "10:00",
    endDate: "2026-05-12",
    endTime: "11:00",
    reason: "Primary teacher absent",
    status: "Active",
  },
  {
    id: "2",
    replacementTeacher: "Fatima Head Teacher",
    primaryTeacher: "Umar Teacher",
    className: "Hadeeth 1",
    startDate: "2026-05-10",
    startTime: "16:00",
    endDate: "2026-05-10",
    endTime: "17:00",
    reason: "Emergency replacement",
    status: "Expired",
  },
  {
    id: "3",
    replacementTeacher: "Ahmed Teacher",
    primaryTeacher: "Fatima Head Teacher",
    className: "Hifz 1",
    startDate: "2026-05-13",
    startTime: "14:00",
    endDate: "2026-05-13",
    endTime: "15:00",
    reason: "Planned leave",
    status: "Scheduled",
  },
]

export const attendanceSummary = [
  {
    title: "Classes Today",
    value: "4",
  },
  {
    title: "Attendance Marked",
    value: "3",
  },
  {
    title: "Pending Attendance",
    value: "1",
  },
  {
    title: "Absent Students",
    value: "5",
  },
]

export const classAttendance = [
  {
    id: "1",
    className: "Fiqh 1",
    teacher: "Ahmed Teacher",
    time: "10:00 - 11:00",
    totalStudents: 12,
    present: 10,
    absent: 1,
    late: 1,
    status: "Marked",
  },
  {
    id: "2",
    className: "Hifz 1",
    teacher: "Fatima Teacher",
    time: "14:00 - 15:00",
    totalStudents: 8,
    present: 0,
    absent: 0,
    late: 0,
    status: "Pending",
  },
  {
    id: "3",
    className: "Hadeeth 1",
    teacher: "Umar Teacher",
    time: "16:00 - 17:00",
    totalStudents: 10,
    present: 8,
    absent: 2,
    late: 0,
    status: "Marked",
  },
]

export const teacherAttendance = [
  {
    id: "1",
    teacher: "Ahmed Teacher",
    status: "Present",
    checkIn: "09:45",
  },
  {
    id: "2",
    teacher: "Fatima Teacher",
    status: "Not marked",
    checkIn: "-",
  },
  {
    id: "3",
    teacher: "Umar Teacher",
    status: "Present",
    checkIn: "15:50",
  },
]

type Student = {
  id: number
  name: string
  rollNumber: string
}

 type ClassItem = {
  id: string
  name: string
  teacher: string
  schedule: string
}

export const attendanceClasses: ClassItem[] = [
  {
    id: "1",
    name: "Class 5A - Islamic Studies",
    teacher: "Ustad Ahmad",
    schedule: "Monday, 10:00 - 11:00",
  },
  {
    id: "2",
    name: "Class 6B - Quran Recitation",
    teacher: "Ustad Yusuf",
    schedule: "Tuesday, 09:00 - 10:00",
  },
  {
    id: "3",
    name: "Class 7A - Arabic Language",
    teacher: "Ustad Ibrahim",
    schedule: "Wednesday, 14:00 - 15:00",
  },
  {
    id: "4",
    name: "Class 4B - Hadith Studies",
    teacher: "Ustad Zayd",
    schedule: "Thursday, 11:00 - 12:00",
  },
]

export const students: Student[] = [
  { id: 1, name: "Ahmed Khan", rollNumber: "5A-001" },
  { id: 2, name: "Yusuf Ali", rollNumber: "5A-002" },
  { id: 3, name: "Ibrahim Yusuf", rollNumber: "5A-003" },
  { id: 4, name: "Zayd Hassan", rollNumber: "5A-004" },
  { id: 5, name: "Bilal Omar", rollNumber: "5A-005" },
  { id: 6, name: "Hamza Malik", rollNumber: "5A-006" },
  { id: 7, name: "Tariq Ahmed", rollNumber: "5A-007" },
  { id: 8, name: "Khalid Said", rollNumber: "5A-008" },
]

export type AttendanceStatus =
  | "present"
  | "absent"
  | "late"
  | "excused"
  | "dropped"
  
 export const statusOptions: {
  value: AttendanceStatus
  label: string
  icon: React.ElementType
  activeClass: string
  inactiveClass: string
}[] = [
  {
    value: "present",
    label: "Present",
    icon: CheckCircle2,
    activeClass: "border-[#4b5205] bg-[#4b5205] text-white shadow-sm",
    inactiveClass:
      "border-[#d8d0a7] bg-white text-[#4b5205] hover:bg-[#f5f1dc]",
  },
  {
    value: "absent",
    label: "Absent",
    icon: XCircle,
    activeClass: "border-red-600 bg-red-600 text-white shadow-sm",
    inactiveClass: "border-red-200 bg-white text-red-700 hover:bg-red-50",
  },
  {
    value: "late",
    label: "Late",
    icon: Clock,
    activeClass: "border-amber-600 bg-amber-600 text-white shadow-sm",
    inactiveClass: "border-amber-200 bg-white text-amber-700 hover:bg-amber-50",
  },
  {
    value: "excused",
    label: "Excused",
    icon: AlertCircle,
    activeClass: "border-blue-600 bg-blue-600 text-white shadow-sm",
    inactiveClass: "border-blue-200 bg-white text-blue-700 hover:bg-blue-50",
  },
  {
    value: "dropped",
    label: "Dropped",
    icon: MinusCircle,
    activeClass: "border-zinc-600 bg-zinc-600 text-white shadow-sm",
    inactiveClass: "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
  },
]

export const announcements = [
  {
    id: "1",
    title: "Quran class schedule update",
    message: "Hifz 1 class will start 30 minutes earlier this Friday.",
    type: "Class-specific",
    audience: "Hifz 1",
    priority: "Important",
    date: "17 May 2026",
    status: "Published",
  },
  {
    id: "2",
    title: "Monthly teacher meeting",
    message: "All teachers are requested to attend the monthly review meeting.",
    type: "Teacher-only",
    audience: "Teachers",
    priority: "Normal",
    date: "16 May 2026",
    status: "Published",
  },
  {
    id: "3",
    title: "Institute holiday notice",
    message: "The institute will be closed for the public holiday.",
    type: "School-wide",
    audience: "All users",
    priority: "Urgent",
    date: "15 May 2026",
    status: "Published",
  },
]