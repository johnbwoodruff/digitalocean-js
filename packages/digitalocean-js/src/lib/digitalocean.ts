import { instance } from './axios-instance';
import { API_BASE_URL } from './conf/environment';
import { AccountService } from './services/account/account.service';
import { ActionService } from './services/actions/actions.service';
import { BillingHistoryService } from './services/billing-history/billing-history.service';
import { BlockStorageActionService } from './services/block-storage/block-storage-actions.service';
import { BlockStorageService } from './services/block-storage/block-storage.service';
import { CdnService } from './services/cdn/cdn.service';
import { CertificateService } from './services/certificate/certificate.service';
import { DomainRecordService } from './services/domain/domain-record.service';
import { DomainService } from './services/domain/domain.service';
import { DropletActionService } from './services/droplet/droplet-actions.service';
import { DropletService } from './services/droplet/droplet.service';
import { FirewallService } from './services/firewall/firewall.service';
import { FloatingIPActionService } from './services/floating-ip/floating-ip-actions.service';
import { FloatingIPService } from './services/floating-ip/floating-ip.service';
import { ImageActionService } from './services/image/image-actions.service';
import { ImageService } from './services/image/image.service';
import { KubernetesService } from './services/kubernetes/kubernetes.service';
import { LoadBalancerService } from './services/load-balancer/load-balancer.service';
import { ProjectService } from './services/project/project.service';
import { RegionService } from './services/region/region.service';
import { SizeService } from './services/size/size.service';
import { SnapshotService } from './services/snapshot/snapshot.service';
import { SshService } from './services/ssh/ssh.service';
import { TagService } from './services/tag/tag.service';

export class DigitalOcean {
  public account: AccountService;
  public actions: ActionService;
  public billingHistory: BillingHistoryService;
  public blockStorage: BlockStorageService;
  public blockStorageActions: BlockStorageActionService;
  public cdn: CdnService;
  public certificates: CertificateService;
  public domains: DomainService;
  public domainRecords: DomainRecordService;
  public droplets: DropletService;
  public dropletActions: DropletActionService;
  public firewalls: FirewallService;
  public floatingIPs: FloatingIPService;
  public floatingIPActions: FloatingIPActionService;
  public images: ImageService;
  public imageActions: ImageActionService;
  public kubernetes: KubernetesService;
  public loadBalancers: LoadBalancerService;
  public projects: ProjectService;
  public regions: RegionService;
  public sizes: SizeService;
  public snapshots: SnapshotService;
  public ssh: SshService;
  public tags: TagService;

  constructor(private token: string, url = API_BASE_URL) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    instance.defaults.headers.common['Content-Type'] = `application/json`;
    instance.defaults.baseURL = url;
    // instance.interceptors.request.use(request => {
    //   console.log('Starting Request', JSON.stringify(request, null, 2));
    //   return request;
    // });

    this.account = new AccountService();
    this.actions = new ActionService();
    this.billingHistory = new BillingHistoryService();
    this.blockStorage = new BlockStorageService();
    this.blockStorageActions = new BlockStorageActionService();
    this.cdn = new CdnService();
    this.certificates = new CertificateService();
    this.domains = new DomainService();
    this.domainRecords = new DomainRecordService();
    this.droplets = new DropletService();
    this.dropletActions = new DropletActionService();
    this.firewalls = new FirewallService();
    this.floatingIPs = new FloatingIPService();
    this.floatingIPActions = new FloatingIPActionService();
    this.images = new ImageService();
    this.imageActions = new ImageActionService();
    this.kubernetes = new KubernetesService();
    this.loadBalancers = new LoadBalancerService();
    this.projects = new ProjectService();
    this.regions = new RegionService();
    this.sizes = new SizeService();
    this.snapshots = new SnapshotService();
    this.ssh = new SshService();
    this.tags = new TagService();
  }
}
