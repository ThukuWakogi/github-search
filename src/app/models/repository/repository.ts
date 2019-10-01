export class Repository {
  constructor(
    public archived: boolean = null,
    public branchesUrl: string = '',
    public cloneUrl: string = '',
    public contentUrl: string = '',
    public createdAt: string = '',
    public description: string = '',
    public fork: boolean = null,
    public forks: number = null,
    public forksCount: number = null,
    public fullName: string = '',
    public name: string = '',
    public watchers: number = null,
  ) {}
}
