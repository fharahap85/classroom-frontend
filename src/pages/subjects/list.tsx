import { ListView } from "@/components/refine-ui/views/list-view"
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DEPARTMENT_OPTIONS } from "@/constants"
import { CreateButton } from "@/components/refine-ui/buttons/create"

const SubjectsList = () => {
    const [searchQuery, setsearchQuery] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    return (
        <ListView>
            <Breadcrumb />
            <h1 className="page-title">Subjects</h1>

            <div className="intro-row">
                <p>Quick access to essential metrics and management tools.</p>

                <div className="action-row">
                    <div className="search-field">
                        <Search className="search-icon" />

                        <Input
                            type="text"
                            placeholder="Search by name..."
                            className="pl-10 w-full"
                            value={searchQuery}
                            onChange={(e) => setsearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-10 w-full sm:w-auto mt-2">
                        <Select
                            value={selectedDepartment}
                            onValueChange={setSelectedDepartment}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by department" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">
                                    All Departments
                                </SelectItem>
                                {DEPARTMENT_OPTIONS.map(department => (
                                    <SelectItem key={department.value}
                                        value={department.value}>
                                        {department.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <CreateButton />
                    </div>
                </div>
            </div>
        </ListView>
    )
}

export default SubjectsList