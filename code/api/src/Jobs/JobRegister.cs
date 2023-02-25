namespace IOL.GreatOffice.Api.Jobs;

public static class JobRegister
{
    private static readonly JobKey AccessTokenCleanupKey = new("AccessTokenCleanupKey");
    private static readonly JobKey VaultTokenRenewalKey = new("VaultTokenRenewalKey");

    public static IServiceCollectionQuartzConfigurator RegisterJobs(this IServiceCollectionQuartzConfigurator configurator) {
        configurator.AddJob<AccessTokenCleanupJob>(AccessTokenCleanupKey);
        configurator.AddJob<VaultTokenRenewalJob>(VaultTokenRenewalKey);
        configurator.AddTrigger(options => {
            options.ForJob(AccessTokenCleanupKey)
                .WithIdentity(AccessTokenCleanupKey.Name + "-trigger")
                .WithCronSchedule("0 0 0/1 ? * * *");
        });
        configurator.AddTrigger(options => {
            options.ForJob(VaultTokenRenewalKey)
                .WithIdentity(VaultTokenRenewalKey.Name + "-trigger")
                .WithCronSchedule("0 0 0/1 ? * * *");
        });
        return configurator;
    }
}