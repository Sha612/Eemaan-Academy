import Link from "next/link"
import { Plus, Users,GraduationCap } from "lucide-react"

import { buttonStyles } from "@/lib/style"

export function ClassesActions() {
  return (
    <>
      <Link
        href="/admin/classes/assign-student"
        className={buttonStyles.secondary}
      >
        <GraduationCap size={18} />
        Assign Student
      </Link>
      <Link
        href="/admin/classes/assign-teacher"
        className={buttonStyles.secondary}
      >
        <Users size={18} />
        Assign Teacher
      </Link>

      <Link href="/admin/classes/new" className={buttonStyles.primary}>
        <Plus size={18} />
        Create Class
      </Link>
    </>
  )
}