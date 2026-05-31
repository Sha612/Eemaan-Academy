import type { DashboardActivity } from '@/components/dashboard/types'

import { getClasses } from '@/modules/classes/services'
import { getStudents } from '@/modules/students/services'
import { getTeachers } from '@/modules/teachers/services'

export async function getRecentActivities(): Promise<
  DashboardActivity[]
> {
  try{
    const [studentsResponse, teachersResponse] =
    await Promise.all([
      getStudents(),
      getTeachers(),
      getClasses(),
    ])

  const recentActivities: DashboardActivity[] = [
    ...studentsResponse.data.slice(0, 2).map((student) => ({
      id: `student-${student.id}`,
      title: 'Student record available',
      description: `${student.firstName} ${student.lastName} is registered in the system`,
      time: student.createdAt,
      status: 'success' as const,
    })),

    ...teachersResponse.data.slice(0, 2).map((teacher) => ({
      id: `teacher-${teacher.id}`,
      title: 'Teacher record available',
      description: `${teacher.firstName} ${teacher.lastName} is registered in the system`,
      time: teacher.createdAt,
      status: 'info' as const,
    })),

  //   ...classesResponse.data.slice(0, 2).map((classItem) => ({
  //     id: `class-${classItem.id}`,
  //     title: 'Class record available',
  //     description: `${classItem.name} is available under ${classItem.subject}`,
  //     time: classItem.createdAt,
  //     status: 'warning' as const,
  //   })),
  ]
    .sort(
      (a, b) =>
        new Date(b.time).getTime() -
        new Date(a.time).getTime()
    )
    .slice(0, 5)
    .map((activity) => ({
      ...activity,
      time: new Date(activity.time).toLocaleDateString(),
    }))

  return recentActivities
  } catch (error) {
    console.error('Error fetching recent activities:', error)
    return []
  }

}