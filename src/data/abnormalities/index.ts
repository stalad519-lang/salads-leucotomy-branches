import type { AbnormalityRecord } from "@/lib/abnormality"
import { folagerlak } from "@/data/abnormalities/folagerlak"
import { imaginaryFriend } from "@/data/abnormalities/imaginary-friend"
import { qe } from "@/data/abnormalities/qe"

export const abnormalityFiles: AbnormalityRecord[] = [
  qe,
  imaginaryFriend,
  folagerlak,
]
